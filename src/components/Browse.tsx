import { debounce } from "lodash";
import {useCallback, useEffect, useState} from "react";

import '../stylesheets/Browse.scss';
import {TagSnapshot} from "./TagSnapshot";
import {WorkSnapshot} from "./WorkSnapshot";

// @ts-ignore
export function Browse({target}) {

    const [searchTerm, setSearchTerm]: [string, any] = useState('');
    const [searchResults, setSearchResults]: [any[], any] = useState([]);

    useEffect(() => {
        fetchResults('');
    }, []);

    const searchTermChangeHandler = useCallback(
        debounce(handleSearch, 500), []
    );

    function handleSearch(event: any) {
        setSearchTerm(event.target.value);
        fetchResults(event.target.value);
    }

    function fetchResults(keyword: string) {
        fetch(`https://dummyjson.com/posts/search?q=${keyword}`)
            .then(res => res.json())
            .then(json => setSearchResults(json['posts']))
    }

    return (
        <div className="browse">
            <div className="search-input-area">
                <div className="search-type-area">
                    <input type="text" onChange={searchTermChangeHandler} />
                    {/*<span>{ searchTerm }</span>*/}
                </div>
                <div className="search-filter-area">
                    <div className="search-filter">
                        <div className="search-filter-label">
                            <span>A filter</span>
                        </div>
                        <div className="search-filter-options">
                            <select>
                                <option>
                                    <span>Option 1</span>
                                </option>
                                <option>
                                    <span>Option B</span>
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="search-filter">
                        <div className="search-filter-label">
                            <span>A filter</span>
                        </div>
                        <div className="search-filter-options">
                            <select>
                                <option>
                                    <span>Option 1</span>
                                </option>
                                <option>
                                    <span>Option B</span>
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="search-result-area">
                <ul>
                    {searchResults.map(item => {
                        return  (
                            <li key={item.id}>
                                {target==="tags" &&
                                    <TagSnapshot tagName={item.title} tagId={item.id} />
                                }
                                {target==="works" &&
                                    <WorkSnapshot workName={item.title} workId={item.id} />
                                }
                            </li>
                        )})
                    }
                </ul>
            </div>
        </div>
    )
}
