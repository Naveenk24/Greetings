import {GreetingImage, CardListItem} from './styledComponents'

export default function GreetingsCard(props) {
  const {cardDetails} = props
  const {imageUrl, imageAltText} = cardDetails
  return (
    <CardListItem>
      <GreetingImage src={imageUrl} alt={imageAltText} />
    </CardListItem>
  )
}
