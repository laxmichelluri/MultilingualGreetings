import './index.css'

const LanguageItem = props => {
  const {languageDetails} = props
  const {imageUrl, imageAltText} = languageDetails
  return (
    <>
      <li className="list-items-container">
        <img className="item-image" src={imageUrl} alt={`${imageAltText}`} />
      </li>
    </>
  )
}

export default LanguageItem
