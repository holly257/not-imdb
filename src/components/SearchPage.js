import React, { useEffect, useState } from 'react'
import config from '../config';
import ApiService from '../api-service';
import ResultsPage from './results/ResultsPage';
    import { useStoreActions, useStoreState } from 'easy-peasy';

function SearchPage() {

    
    const notes = useStoreState((state) => state.notes);
//         const search_term = '';
//         const url = `${config.API_ENDPOINT}?key=${config.API_KEY}&q=${encodeURIComponent(
//                 search_term
//             )}&image_type=photo&per_page=21`;
    
//         const [state, setState] = useState([])
//         useEffect(()=>{
//             // fetch(url, { method: 'get' }).then(res => {
//             //     let response;
//             //     if(res.ok){

//             //         response =  res.json();
//             //     }
//             //    // setState(response);
//             // }).then(res => {
//             //     console.log(res.hits);
//             //     //setState(res);
//             // })

//             const fetchData = async () => {
//                 try {
//                   const response = await fetch(url, { method: 'get' });
//                   const json = await response.json();
//                   const resp = json.hits
//                   console.log(resp);
//                   //setState(json.hits);
//                 } catch (error) {
//                   console.log("error", error);
//                 }
//                 setState('value')
//               };
          
//               fetchData();
//         })
    
    

        return (
            <main className="inner-main">
                <section id="page-header">
                    <h3 className="title-text">S E A R C H</h3>

                    <form
                       
                    >
                        <input
                            className="search"
                            type="text"
                            id="search"
                            name="search"
                            required
                            placeholder="Search Images"
                        ></input>
                            <button type="submit">Go</button>

                    </form>
                </section>
                <section>
        <div>{state}</div>
                    {/* <ResultsPage state={state} /> */}
                </section>
            </main>
        );
}

export default SearchPage;
