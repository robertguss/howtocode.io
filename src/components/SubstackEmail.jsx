export default function SubstackEmail() {
  const styles = {
    border: '1px solid #EEE',
  }

  return (
    <>
      <div className="my-16 flex justify-center">
        <iframe
          src="https://howtocode.substack.com/embed"
          width="100%"
          height="320"
          // style={styles}
          className="rounded-md border border-sky-500"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </>
  )
}
