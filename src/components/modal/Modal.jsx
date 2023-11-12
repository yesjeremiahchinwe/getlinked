
/* eslint-disable */
export default function Modal({ show, onClose, children }) {
  return (
    show && (
        <>
        <div className="fixed top-0 left-0 w-full h-full block bg-[rgb(21,14,40,0.9)] z-50"></div>

        <section className='fixed border-[1px] border-[#FE34B9] rounded-md left-[50%] top-[50%] w-[90%] mx-auto max-w-[600px] min-h-[320px] translate-x-[-50%] translate-y-[-50%] z-[100000000000] bg-[rgb(21,14,40,0.5)]'>
            <article>
                {children}
            </article>
        </section>
        </>
    )
  )
}
