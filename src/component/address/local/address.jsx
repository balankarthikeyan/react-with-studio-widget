import './styles.css'

function Address() {
  const renderList = () => {
    return (
      <>
        <address className="address-wrapper">
          <span className="address-item make-bold">Skava World Headquarters</span>
          <span className="address-item">555 Mission Street</span>
          <span className="address-item">Suite 1950</span>
          <span className="address-item">San Francisco, CA 94105</span>
          <span className="address-item telephone-number">(877)554-2176</span>
        </address>
        <address className="address-wrapper">
          <span className="address-item make-bold">Skava NYC</span>
          <span className="address-item">One World Trade Center</span>
          <span className="address-item">285 Fulton St., 79A</span>
          <span className="address-item">New York, NY 10007</span>
          <span className="address-item telephone-number">(646)254-3198</span>
        </address>
        <address className="address-wrapper">
          <span className="address-item make-bold">Skava Atlanta</span>
          <span className="address-item">2180 Satellite Blvd.</span>
          <span className="address-item">Suite 400</span>
          <span className="address-item">Duluth, GA 30097</span>
          <span className="address-item telephone-number">(770)281-8709</span>
        </address>
        <address className="address-wrapper">
          <span className="address-item make-bold">Skava Europe</span>
          <span className="address-item">10, Upper Bank Street</span>
          <span className="address-item">Canary Wharf, London E14 5NP</span>
          <span className="address-item">+44(756)452-6020</span>
        </address>
        <address className="address-wrapper">
          <span className="address-item make-bold">Skava India, CBE</span>
          <span className="address-item">Module: 108</span>
          <span className="address-item">
            1st Floor Tidel Park,IT/ITES ELCOT SEZ
          </span>
          <span className="address-item">
            Vilankurichi Village Civil Aerodrome Post, Coimbatore-641014
          </span>
        </address>
      </>
    )
  }
  return (
    <section className="address-list-wrapper">
      <div className="address-list-container">{renderList()}</div>
    </section>
  )
}

export { Address }
export default Address
