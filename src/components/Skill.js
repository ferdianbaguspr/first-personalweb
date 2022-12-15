import '../style/Styles.css'


function Skill() {
    return (
    <section className='pembungkus'>
        <nav className='frontend'>
            <h5 className='frontendTitle'>Front-End</h5>
                <ul className='isiFrontend'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>Javascript</li>
                    <li>jQuery</li>
                    <li>React js</li>
                </ul>
        </nav>

        <article className='backend'>
            <h5 className='backendTitle'>Back-End</h5>
                <ul className='isiBackend'>
                    <li>SQL</li>
                    <li>NoSQL</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>Node Js</li>
                    <li>API</li>
                </ul>
        </article>
    </section>
    )
}

export default Skill;