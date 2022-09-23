import React, { useState, FC } from 'react'
import { useQuery, useSubscription } from '@apollo/client'
import { withStyles } from '@material-ui/core/styles'
import { Button, Card, CardContent } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import { Link } from 'react-router-dom'
import { isNil } from 'lodash'

import { BookCardComponent } from '../../components'
import AddCommentForm from './AddCommentForm'

import { GET_BOOK_BY_ID, BOOK_COMMENT_ADDED } from './graphql'

import styles from './styles'
import { getBook } from './__generated__/getBook'
import { BasicStyledComponent } from '../../types'

const NewComment: FC<{ onNewComment: () => void }> = ({ onNewComment }) => {
  const { data } = useSubscription<any>(BOOK_COMMENT_ADDED, {
    onSubscriptionData: () => {
      onNewComment()
    },
  })

  if (!data) return null

  return (
    <Card style={{ marginBottom: 20 }}>
      <CardContent>
        <strong>New comment added:</strong> {data.commentAdded.text} | by <strong>{data.commentAdded.author}</strong>
      </CardContent>
    </Card>
  )
}

const BookComponent = ({
  bookId,
  classes,
}: { bookId: number } & BasicStyledComponent) => {
  const [commentPerPage] = useState(5)
  const [pageNumber, setPageNumber] = useState(0)
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const { data, error, refetch } = useQuery<getBook>(GET_BOOK_BY_ID, {
    variables: { id: bookId },
  })

  if (error) return <p>Error!: ${error}</p>
  if (isNil(data?.getBook)) return <p>Loading...</p>
  const setNextPage = () => {
    const comments = data?.getBook?.comments ?? []
    if (comments?.length && pageNumber + commentPerPage <= comments?.length)
      setPageNumber(pageNumber + commentPerPage)
  }
  const setPreviousPage = () => {
    if (pageNumber - commentPerPage > 0) setPageNumber(pageNumber - commentPerPage)
  }
  if (!data?.getBook) return <p>No such Book!</p>

  const book = data.getBook

  return (
    <Paper className={classes.root}>
      <NewComment onNewComment={refetch} />
      <div className={classes.container}>
        <BookCardComponent
          classes={classes}
          title={book.title}
          description={book.description}
          author={book.author}
          date={book.pubDate}
        />
        {book?.comments?.length !== 0 && (
          <Paper className={classes.comments}>
            <div className={classes.title}>Comments</div>
            {book?.comments?.map((comment: any, index: number) => <div key={index}>
              <div className={classes.comment}>{comment?.text} | By <strong>{comment?.author}</strong></div>
            </div>)}
            <div className={classes.pagination}>
              <Button onClick={setPreviousPage}>Prev</Button>
              <Button onClick={setNextPage}>Next</Button>
            </div>
          </Paper>
        )}
      </div>
      <Button
        variant="contained"
        className={classes.button}
        component={Link}
        to="/books"
        color="secondary"
      >
        Back
      </Button>
      <Button 
        variant="outlined" 
        className={classes.button}
        color="primary"
        onClick={handleClickOpen}
        >
        Add Comment
      </Button>
          <AddCommentForm open={open} handleClose={handleClose} onSuccess={refetch} bookId={bookId} />
    </Paper>
  )
}

export default withStyles(styles)(BookComponent)
