
import styles from '@/styles/Home.module.css'
import { Button, Container, Navbar, Text, Grid, Col } from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import InfoCard from './InfoCard'

export default function Index() {
    const router = useRouter();
    const username = router.query.username;
    return (
        <Container>
            {/* Navbar */}
            <Navbar isCompact variant={"static"}>
                <Navbar.Brand>
                    <Text css={{ "font-size": "50px", "margin-bottom": "15px", "margin-top": "15px" }} b color="inherit">
                        coursera
                    </Text>
                </Navbar.Brand>
                <Navbar.Content hideIn="md">
                    <Navbar.Link href="https://www.coursera.org/?gclid=Cj0KCQjwla-hBhD7ARIsAM9tQKuAU2gjA4llb-_55gxY2w_MBn1Hm12kam1yj0n8Tp3MiT5S7oCuSasaAtq1EALw_wcB">Learning Platform</Navbar.Link>
                    <Navbar.Link href="https://www.coursera.org/degrees">Community</Navbar.Link>
                    <Navbar.Link href="https://about.coursera.org/contact/">Contact Us</Navbar.Link>
                </Navbar.Content>


                {/* <Navbar.Item>
              <Button auto flat> */}
                {username ? (
                    <p>Welcome {username}</p>
                ) : (
                    <Navbar.Content className={styles.login_signup_wrapper}>
                        <Navbar.Link href="/components/login">Login</Navbar.Link>
                        <Navbar.Link href="/components/signup" >
                            SignUp
                        </Navbar.Link>
                    </Navbar.Content>

                )}


                {/* </Button>
            </Navbar.Item> */}
            </Navbar>
            {/* Jumbotron */}
            <Grid.Container justify="center" css={{ "height": "500px", "backgroundImage": "url(https://littlevisuals.co/images/sunset.jpg)" }}>
                <Grid xs={12} sm={6} alignItems="center">
                    <Col css={{ "width": "100%" }} >
                        <Text weight={"bold"} size={70} css={{ "textAlign": "center" }}>
                            The Education Platform
                        </Text>
                        <Text weight={"bold"} size={70} css={{ "textAlign": "center" }}>
                            Of The Future
                        </Text>
                        <Link href="https://www.coursera.org/courses?query=free">
                            <Button size="md" shadow color="gradient" css={{ "width": "100%", "marginTop": "10px" }}>
                                Join for free
                            </Button>
                        </Link>
                    </Col>
                </Grid>
            </Grid.Container>
            {/* 3 Displaying Product Cards */}
            <Grid.Container gap={2}>
                <Grid xs={12} sm={4} >
                    <InfoCard
                        label1="Next.js Course"
                        title="Learn Next.js for Free"
                        imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBFM5HfAnBgAQe7Tg0sdJDDdeOLpDx5plYBw&usqp=CAU"
                        studentCount="3,500"
                        link="https://nextjs.org/docs" />

                </Grid>
                <Grid xs={12} sm={4} >
                    <InfoCard
                        label1="React Course"
                        title="Learn React for Free"
                        imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjooL6ZodY3Fu6L2bIg8S4yPRRn74Q2W7xHw&usqp=CAU"
                        studentCount="1,000"
                        link="https://legacy.reactjs.org/docs/getting-started.html" />
                </Grid>
                <Grid xs={12} sm={4} >
                    <InfoCard
                        label1="Startup Course"
                        title="Create a startup"
                        imageURL="data:image/jpeg;base64,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"
                        studentCount="5,000"
                        link="https://www.thehartford.com/business-insurance/strategy/how-to-start-a-business/startup" />

                </Grid>
            </Grid.Container>



        </Container>
    )
}