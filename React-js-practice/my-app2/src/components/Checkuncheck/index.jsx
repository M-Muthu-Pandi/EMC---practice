import List from './checkuncheck'

const CheckUncheck = () => {
    const listact = ["Wakeup at 7", "Go to Shop", "Buy Tomato"];


    return (
        <div>
            <h1>List of Activities</h1>
            {
                listact.map((item) => {
                    return (
                        <List activity={item} />
                    )
                })
            }

        </div>
    )
}

export default CheckUncheck;