import {ListItems, ButtonHeading} from './styledComponents'

export default function GreetingsHeading(props) {
  const {
    headingDetails,
    updateTheHeading,
    currentHeading,
    currentHeadingClassName,
  } = props

  const {id, buttonText} = headingDetails

  console.log(currentHeading)

  const ChangeTheHeading = () => updateTheHeading(id)

  return (
    <ListItems>
      <ButtonHeading
        type="button"
        onClick={ChangeTheHeading}
        activeTab={currentHeadingClassName}
      >
        {buttonText}
      </ButtonHeading>
    </ListItems>
  )
}
