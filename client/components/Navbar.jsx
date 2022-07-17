import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { UnorderedList, Heading, ListItem } from '@chakra-ui/react'
import { setSelectedClient } from '../reducers/clientList'

export function Navbar() {
  const dispatch = useDispatch()
  const clients = useSelector((state) => state.clientList)

  const orderedCompanyNames = clients.data
    .map((client) => client.business_name)
    .sort()

  function handleClick(company) {
    const myClient = clients.data.find(
      (client) => client.business_name == company
    )
    return dispatch(setSelectedClient(myClient))
  }

  if (clients.loading) {
    return <>Loading ...</>
  }

  return (
    <>
      <Heading as="h2" fontSize="2xl" color="#E9F7F7">
        Clients
      </Heading>
      <UnorderedList>
        {orderedCompanyNames.map((company, i) => (
          <ListItem onClick={() => handleClick(company)} key={i}>
            {/* Attaching a click event directly to the list item in this way means that the markup rendered to the page is inaccessible,
            in a few ways. Can you use a different component, or nest a link or button inside of it? */}
            {company}
          </ListItem>
        ))}
      </UnorderedList>
    </>
  )
}
