type NewComponentsType = {
    students: Array<StudentType>
}
type StudentType = {
    id: number,
    name: string,
    age: number
}

export const NewComponent = (props: NewComponentsType) => {

    return (
        <ul>
            {
                props.students.map((el, index) => {
                    return (
                        <li key={el.id}>
                            <span>name: {el.name}</span>
                            <span> age: {el.age}</span>
                        </li>
                    );
                })
            }
        </ul>
    );
}