import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import FormControl from 'react-bootstrap/FormControl'
import algoliasearch from 'algoliasearch/lite'
import { connectHits, connectPoweredBy, connectSearchBox, connectStateResults, Highlight, InstantSearch, Snippet } from 'react-instantsearch-dom'
import useBreakpoint from '@restart/hooks/useBreakpoint'
import useMediaQuery from '@restart/hooks/useMediaQuery'

const searchClient = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76')

const PoweredBy = ({ url }) => <a href={url} target='_blank' rel='noopener noreferrer'>Algolia</a>

const CustomPoweredBy = connectPoweredBy(PoweredBy)

const Hits = ({ hits }) => {
  return (
    <>
      <Dropdown.Toggle as='span' bsPrefix='algolia-dropdown' id='algolia-dropdown' />
      <Dropdown.Menu>
        <Dropdown.Header>Search powered by <CustomPoweredBy /></Dropdown.Header>
        {hits.length === 0
          ? <Dropdown.Item disabled>No search results</Dropdown.Item>
          : hits.map((hit) => {
            return (
              <Dropdown.Item key={hit.objectID}>
                <Highlight attribute='name' hit={hit} /><br />
                <small className='text-muted'><Snippet attribute='body' hit={hit} /></small>
              </Dropdown.Item>
            )
          })}
      </Dropdown.Menu>
    </>
  )
}

const CustomHits = connectHits(Hits)

const CustomSearchResults = connectStateResults(
  ({ searchState }) =>
    searchState && searchState.query
      ? <CustomHits />
      : null
)

const SearchBox = ({ currentRefinement, refine }) => {
  return (
    <FormControl
      onChange={event => refine(event.currentTarget.value)}
      placeholder='Search…'
      type='search'
      value={currentRefinement}
    />
  )
}

const CustomSearchBox = connectSearchBox(SearchBox)

const MidSizeOnly = () => {
  const isWide = useMediaQuery('min-width: 900px')
  console.log(isWide ? 'very wide' : 'not so wide')
  const isMid = useBreakpoint({ lg: 'down', sm: 'up' })
  if (isMid) return <div>On a Reasonable sized Screen!</div>
  return null
}

const AlgoliaTest = () => {
  const [show, setShow] = useState(false)
  const handleSearchStateChange = searchState => {
    if (searchState.query.length) {
      setShow(true)
    }
  }
  const toggle = () => setShow(!show)

  return (
    <InstantSearch
      indexName='instant_search'
      onSearchStateChange={handleSearchStateChange}
      searchClient={searchClient}
    >
      <Dropdown show={show} drop='right' onToggle={toggle}>
        <CustomSearchBox />
        <CustomSearchResults />
        <MidSizeOnly />
      </Dropdown>
    </InstantSearch>
  )
}

export default AlgoliaTest
