import { Box, Container } from '@mui/material'

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>{children}</Box>
      </Container>
    </>
  )
}
