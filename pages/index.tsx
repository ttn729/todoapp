import { Box, Typography, Stack } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import TodoAddBar from '../components/TodoAddBar'
import TodoList from '../components/TodoList'
import styles from '../styles/Home.module.css'
import Hello from './hello'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spicy and Edric App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <Box sx={{ padding: 5 }}>
        <Stack justifyContent="center" alignItems="center" spacing={2}>
          <Hello />
          <Typography>Welcome to your Todo list!</Typography>
          <TodoAddBar />
          <TodoList />
        </Stack>

      </Box>
    </div>
  )
}

export default Home
