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
            <table>
                <tr>
                    <th>Manufacturer</th>
                    <th>Model</th>
                </tr>
                {props.topcars.map((el, index) => {
                    return (
                        <tr key={index}>
                            <td>{el.manufacturer}</td>
                            <td>{el.model}</td>
                        </tr>
                    )
                })
                }
            </table>
        </div>
    );
}