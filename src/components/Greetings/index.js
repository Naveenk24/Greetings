import {useState} from 'react'

import GreetingsHeading from '../GreetingsHeading/index'
import LanguageGreetingsItems from '../LanguageGreetingsItems/index'

import {
  BackgroundContainer,
  HeadingTitle,
  ListOfHeading,
  ListOfGreetingCard,
} from './styledComponents'

export default function Greetings(props) {
  const {languageGreetingsList} = props
  const [currentHeading, setHeading] = useState(languageGreetingsList[0].id)

  const updateTheHeading = id => {
    console.log(id)
    setHeading(id)
  }

  const currentGreetingCard = languageGreetingsList.filter(eachItem => {
    if (eachItem.id === currentHeading) {
      return eachItem
    }
    return null
  })

  console.log(currentGreetingCard.id)
  console.log(currentHeading)
  return (
    <BackgroundContainer>
      <HeadingTitle>Multilingual Greetings</HeadingTitle>
      <ListOfHeading>
        {languageGreetingsList.map(eachItem => (
          <GreetingsHeading
            key={eachItem.id}
            headingDetails={eachItem}
            currentHeadingClassName={currentHeading === eachItem.id}
            updateTheHeading={updateTheHeading}
          />
        ))}
      </ListOfHeading>
      <ListOfGreetingCard>
        {currentGreetingCard.map(eachItem => (
          <LanguageGreetingsItems key={eachItem.id} cardDetails={eachItem} />
        ))}
      </ListOfGreetingCard>
    </BackgroundContainer>
  )
}
