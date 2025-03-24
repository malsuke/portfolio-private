'use client'
import Layout from '@/_layouts/section/layout'
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

type Article = {
  title: string
  url: string
  updated: string
}

type WritingsProps = {
  articles: Article[]
}

const Articles: React.FC<WritingsProps> = ({ articles }) => {
  const [currentPage, setCurrentPage] = React.useState(0)
  const articlesPerPage = 10
  const totalPages = Math.ceil(articles.length / articlesPerPage)

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1)
  }

  const startIndex = currentPage * articlesPerPage
  const endIndex = startIndex + articlesPerPage
  const currentArticles = articles.slice(startIndex, endIndex)

  return (
    <Layout title="Articles">
      <Box
        sx={{
          height: '400px',
          '@media screen and (max-width:600px)': {
            height: '600px',
          },
        }}
      >
        {currentArticles.map((article) => (
          <Box
            key={article.url}
            sx={{
              mb: 2,
              display: 'flex',
              '@media screen and (max-width:600px)': {
                flexDirection: 'column',
              },
            }}
          >
            <Typography
              fontSize={14}
              color="text.primary"
              sx={{ flex: 2 }}
              key={article.url}
            >
              {article.updated}
            </Typography>
            <Link
              href={article.url}
              passHref
              style={{
                flex: 7,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}
            >
              <Typography
                fontSize={14}
                color="text.primary"
                sx={{
                  textDecoration: 'underline',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  ':hover': {
                    textDecorationColor: 'red',
                  },
                }}
              >
                {article.title}
              </Typography>
            </Link>
          </Box>
        ))}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          disableRipple
          disabled={currentPage === 0}
          onClick={handlePrevPage}
          sx={{
            backgroundColor: 'transparent',
            color: 'inherit',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: 'transparent',
              boxShadow: 'none',
            },
            mr: 2,
          }}
        >
          <FontAwesomeIcon fontSize={20} icon={faCircleChevronLeft} />
        </Button>
        <Button
          disableRipple
          disabled={currentPage === totalPages - 1}
          onClick={handleNextPage}
          sx={{
            backgroundColor: 'transparent',
            color: 'inherit',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: 'transparent',
              boxShadow: 'none',
            },
          }}
        >
          <FontAwesomeIcon fontSize={20} icon={faCircleChevronRight} />
        </Button>
      </Box>
    </Layout>
  )
}

export default Articles
