
import type { NextPage } from "next";
import { Card, Text, Row, Col, Button } from "@nextui-org/react";
import styles from './infocard.module.css'

import { link } from "fs";
import Link from "next/link";
import Router from 'next/router';


interface Props {
    title: string;
    label1: string;
    imageURL: string;
    studentCount: string;
    link: any;

}


// const handleClick = (e: any, path: any) => {
//     e.preventDefault()

//     if (path === "/about") {
//         console.log("I clicked on the About Page");
//         router.pathname = ''
//         // then you can: 
//         // router.push(path)
//     }
//     if (path === "/posts") {
//         console.log("I clicked on the Posts Page");
//         // then you can: 
//         // router.push(path)
//     }
// };

const InfoCard: NextPage<Props> = (props) => {
    const { title, label1, imageURL, studentCount, link } = props;
    return (
        <Card>
            <Link href={link}>
                <Card.Header css={{ position: "absolute", top: 5 }}>
                    <Col>
                        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                            {label1}
                        </Text>
                        <Text h4 color="white" >
                            {title}
                        </Text>
                    </Col>
                </Card.Header>
                <img className={styles.image} src={imageURL}/>
            </Link>

            <Card.Footer
                isBlurred
                css={{
                    position: "absolute",
                    bgBlur: "#0f111466",
                    bottom: 0,

                }}>
                <Row>
                    <Col>
                        <Text color="#d1d1d1" size={18}>
                            {studentCount} Students
                        </Text>
                    </Col>
                    <Col>
                        <Row justify="flex-end">
                            <Button flat auto rounded color="primary">
                                <Text
                                    css={{ color: "inherit" }}
                                    size={12}
                                    weight="bold"
                                    transform="uppercase"
                                >
                                    <Link href={{
                                        pathname: '/components/enrollcourse',
                                        query: {courseType : label1}
                                    }}>Enroll this course</Link>
                                </Text>
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
}

export default InfoCard;