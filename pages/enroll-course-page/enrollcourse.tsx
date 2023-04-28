import { Grid, Link } from '@nextui-org/react'
import Head from 'next/head'
import Router, { useRouter } from 'next/router';
import styles from '../enroll-course-page/enroll-course.module.css';
import { Card } from "../api/data.json";

// interface PostProps {
//     posts: [];
//   }

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default function Enrollcourse({ cardData }) {
    const card = cardData.title; console.log(cardData);
    {
        {
            cardData.map((cardData: any) => (
                <div>
                    <h3>{cardData.title}</h3>
                    <p>{cardData.content}</p>
                </div>
            ))
        };
    }

    const router = useRouter();
    const data = router?.query;
    console.log(router);
    if (data?.courseType === 'Next.js Course') {
        return <div className={styles.layout}>
            <Head>
                <title>Enroll Course</title>
            </Head>

            {/* <Header /> */}
            <div className={styles.content}>
                <div className={styles.header_wrapper}>
                    <img onClick={() => Router.back()} className={styles.back_arrow} src="https://cdn-icons-png.flaticon.com/512/93/93634.png" />

                    <h1>{cardData[0].subheading}</h1>
                </div>

                <p>{cardData[0].content}
                </p>
                <div className={styles.btn_wrapper}>
                    <img
                        className={styles.course_image}
                        src={cardData[0]?.imageUrl}
                    />
                    <div className={styles.btn_wrapper2}>
                        <Link href="https://www.coursera.org/projects/twitter-clone-next-js">
                            <button className={styles.enroll_btn}>Enroll for free
                                <br />{cardData[0]?.startingDate}
                            </button>
                        </Link>
                        <h3 className={styles?.enroll_btn}>{cardData[0]?.studentsEnrolled}</h3>
                    </div>
                </div>
                <div className={styles.detail_wrapper}>
                    <h3>About the Course</h3>
                    <p>{cardData[0]?.courseDetail}</p>
                </div>
            </div>

        </div >
    }


    else if (data?.courseType === 'React Course') {
        return <div className={styles.layout}>
            <Head>
                <title>Enroll Course</title>
            </Head>

            {/* <Header /> */}
            <div className={styles.content}>
                <div className={styles.header_wrapper}>
                    <img onClick={() => Router.back()} className={styles.back_arrow} src="https://cdn-icons-png.flaticon.com/512/93/93634.png" />

                    <h1>{cardData[1].subheading}</h1>
                </div>

                <p>{cardData[1].content}
                </p>
                <div className={styles.btn_wrapper}>
                    <img
                        className={styles.course_image}
                        src={cardData[1]?.imageUrl}
                    />
                    <div className={styles.btn_wrapper2}>
                        <Link href="https://www.coursera.org/projects/twitter-clone-next-js">
                            <button className={styles.enroll_btn}>Enroll for free
                                <br />{cardData[0]?.startingDate}
                            </button>
                        </Link>
                        <h3 className={styles?.enroll_btn}>{cardData[1]?.studentsEnrolled}</h3>
                    </div>
                </div>
                <div className={styles.detail_wrapper}>
                    <h3>About the Course</h3>
                    <p>{cardData[1]?.courseDetail}</p>
                </div>
            </div>

        </div >

    } else if (data?.courseType === 'Startup Course') {
        return <div className={styles.layout}>
            <Head>
                <title>Enroll Course</title>
            </Head>

            {/* <Header /> */}
            <div className={styles.content}>
                <div className={styles.header_wrapper}>
                    <img onClick={() => Router.back()} className={styles.back_arrow} src="https://cdn-icons-png.flaticon.com/512/93/93634.png" />

                    <h1>{cardData[2].subheading}</h1>
                </div>

                <p>{cardData[2].content}
                </p>
                <div className={styles.btn_wrapper}>
                    <img
                        className={styles.course_image}
                        src={cardData[2]?.imageUrl}
                    />
                    <div className={styles.btn_wrapper2}>
                        <Link href="https://www.coursera.org/projects/twitter-clone-next-js">
                            <button className={styles.enroll_btn}>Enroll for free
                                <br />{cardData[2]?.startingDate}
                            </button>
                        </Link>
                        <h3 className={styles?.enroll_btn}>{cardData[2]?.studentsEnrolled}</h3>
                    </div>
                </div>
                <div className={styles.detail_wrapper}>
                    <h3>About the Course</h3>
                    <p>{cardData[2]?.courseDetail}</p>
                </div>
            </div>

        </div >

    }
}

export const getStaticProps = async () => {
    return {
        props: { cardData: Card },
    };
};

// export async function getStaticPath() {

//     const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
//     const data = await response.json();

//     const paths = data?.map((post: Post) => {
//         return {
//             params: { pid: `${post.id}` },
//         };
//     });

//     // const pathsData = paths.splice(0, 30);

//     return {
//         paths,
//         fallback: true,
//     };
// }

// export async function getServerSideProps(context: any) {
//     const res = await fetch('https://api.github.com/repos/vercel/next.js')
//     const json = await res.json()
//     return {
//         props: { stars: json.stargazers_count }
//     }
// }