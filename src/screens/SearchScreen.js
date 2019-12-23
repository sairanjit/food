import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView  } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [ term, setTerm ] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const FilterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return ( 
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList 
                    results={FilterResultsByPrice('$')} 
                    title="Cost Effective"
                />
                <ResultsList 
                    results={FilterResultsByPrice('$$')} 
                    title="Bit Costlier" 
                />
                <ResultsList 
                    results={FilterResultsByPrice('$$$')}
                    title="Big Spender" 
                />
            </ScrollView>
        </>
    );
};

const styles=StyleSheet.create({

});

export default SearchScreen;