"use client";
import {  useEffect, useState } from "react";
import styles from "./search.module.css"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchBox() {
    const searchParams = useSearchParams();
    
    const [name, setName] = useState("")
    const [level, setLevel] = useState("")
    const [country, setCountry] = useState("")

    const pathname = usePathname();
    const router = useRouter();

    // Check if 'name' parameter is present in the searchParams and set it to the 'name' state
    useEffect(() => {
        const nameFromParams = searchParams.get('name');
        if (nameFromParams) {
            console.log("ada", nameFromParams)
            setName(nameFromParams);
        }

        const levelFromParams = searchParams.get('level');
        if(levelFromParams) {
            setLevel(levelFromParams);
        }

        const countryFromParams = searchParams.get('country');
        if(countryFromParams) {
            setCountry(countryFromParams);
        }
    }, [searchParams]);

    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            handleSearch();
        }, 500);

        return () => clearTimeout(debounceTimeout);
    }, [name, level, country]);

    const handleSearch = () => {
        let params = new URLSearchParams(searchParams);
        console.log('handleSearch nmae',name)
        
        if(!!name && name !== '') {
            params.set('name', name)
        } else {
            params.delete('name')
        }

        if(!!level && level !== '') {
            params.set('level', level)
        } else {
            params.delete('level')
        }

        if(!!country && country !== '') {
            params.set('country', country)
        } else {
            params.delete('country')
        }

        router.replace(`${pathname}?${params.toString()}`)
    }

    return (
        <div className={styles.search_container}>
            <input className={styles.search_input} type="text" name="name" placeholder="Search University name or Course name" onChange={e => setName(e.target.value)} value={name}/>
            <input className={styles.search_input} type="text" name="level" placeholder="Search Level e.g. Diploma or Undergraduate" onChange={e => setLevel(e.target.value)} value={level}/>
            <input className={styles.search_input} type="text" name="country" placeholder="Search Country e.g. India, United States of America, etc." onChange={e => setCountry(e.target.value)} value={country}/>
        </div>
    )
}