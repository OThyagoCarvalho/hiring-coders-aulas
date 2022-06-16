import React, { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Pagination from '../components/Pagination/index';
import { args } from '../config/api';
import { TextField } from '@material-ui/core';
import { GetServerSideProps } from 'next';

interface IPropsComponent {
    list: any[];
    page: number;
    total_pages: number;
    search: boolean;
    search_param: string;
}

const Home = ({ list, page, total_pages, search_param }: IPropsComponent) => {
    // initializes state to store data from API request
    const [data, setData] = useState<any[]>([]);
    const router = useRouter();

    // initializes state to store search input
    const [search, setSearch] = useState(search_param);
    // initializes state to store the value of search parameter
    const [result, setResult] = useState<undefined | string>(undefined);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        if (search) {
            //  redirect to  page using search and value
            return router.push(`?search=${search}&page=${value}`);
        } else {
            return router.push(`?page=${value}`);
        }
    };

    async function handleSearchMovie(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        return router.push(`/?search=${search}&page=1`);
    }

    useEffect(() => {
        setData(list);
        setResult(search_param);
    }, [list, search_param]);

    return (
        <div className={styles.container}>
            <Head>
                <title> AULA NEXTJS MOVIEDB</title>
                <meta
                    name="description"
                    content="server side rendering com next js"
                ></meta>
                <link rel="icon" href="#"></link>
            </Head>
            <header className={styles.header}>
              <h1> AULA NEXT - API MOVIE DB </h1>
            </header>
            <div>
                <div className={styles.formSearch}>
                    <form onSubmit={handleSearchMovie}>
                        <input
                            type="text"
                            placeholder="procure um filme ou série"
                            onChange={event => setSearch(event.target.value)}
                        />
                        <button type="submit"> pesquisar </button>
                    </form>
                </div>
            </div>
            <div className={styles.titleContainer}>
                {result ? (
                    <h1> Resultado para a busca por: {`${result}`}</h1>
                ) : (
                    <h1> Filmes Populares </h1>
                )}
            </div>
            <div className={styles.moviesContainer}>
                {data.map((item: any, index: number) => (
                    <div key={index}>
                        <Image className={styles.moviePoster}
                            src={`http://image.tmdb.org/t/p/original${item.poster_path}`}
                            alt="movie cover"
                            width={360}
                            height={400}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
export async function getServerSideProps({
    query
}: {
    query: { page?: string; search?: string };
}) {
    if (query.search) {
        const response = await fetch(
            `${args.base_url}/search/movie?api_key=${args.api_key}&query=${
                query.search
            }&page=${query.page ? query.page : 1}&language=pt-BR`
        );
        const { results, page, total_pages } = (await response.json()) as any;
        return {
            props: {
                list: results,
                page,
                total_pages,
                search_param: query.search
            }
        };
    } else {
        const response = await fetch(
            `${args.base_url}/trending/movie/week?api_key=${
                args.api_key
            }&query=${query.search}&page=${
                query.page ? query.page : 1
            }&language=pt-BR`
        );

        const { results, page, total_pages } = (await response.json()) as any;
        return {
            props: {
                list: results,
                page,
                total_pages: total_pages,
                search_param: ''
            }
        };
    }
}
