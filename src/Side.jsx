import './App.css'

function Side(props) {
    const { userName , mesCount } = props;

    return <>
        <div className='main'>
            <div className='wraper'>
                <div class="main_text">Hello {userName}, poslao si do sada {mesCount} poruka</div>
            </div>
        </div>
    </>
}

export default Side;