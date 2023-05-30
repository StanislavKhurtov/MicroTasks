type ComponentWorkPropsType = {
    manufacturer: string,
    model: string
}

type ComponentWorkType = {
    topcars: Array<ComponentWorkPropsType>
}

export const ComponentWork = (props: ComponentWorkType) => {


    return (
        <div>

            {
                props.topcars.map((el, index) => {
                    debugger
                    return (
                        <table key={index}>
                            <tr>
                                <th>Manufacturer</th>
                                <th>Model</th>
                            </tr>
                            <tr>
                                <td>{el.manufacturer}</td>
                                <td>{el.model}</td>
                            </tr>
                        </table>
                    )
                })
            }
        </div>
    );
}