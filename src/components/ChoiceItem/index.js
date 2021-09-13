import {ChoiceListItem, ChoiceButton, ChoiceImage} from './styledComponents'

const ChoiceItem = props => {
  const {choice, setActiveId} = props
  const {id, image, dataTestId} = choice

  const onClickSetActiveId = () => {
    setActiveId(id)
  }

  return (
    <ChoiceListItem>
      <ChoiceButton
        onClick={onClickSetActiveId}
        data-testid={dataTestId}
        type="button"
      >
        <ChoiceImage src={image} alt={id} />
      </ChoiceButton>
    </ChoiceListItem>
  )
}
export default ChoiceItem
