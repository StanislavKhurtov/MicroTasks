import React, {useState} from 'react';
import './App.css';


function App() {

    /* let students = [
         {id: 1, name: "James", age: 8},
         {id: 2, name: "Robert", age: 18},
         {id: 3, name: "John", age: 28},
         {id: 4, name: "Michael", age: 38},
         {id: 5, name: "William", age: 48},
         {id: 6, name: "David", age: 58},
         {id: 7, name: "Richard", age: 68},
         {id: 8, name: "Joseph", age: 78},
         {id: 9, name: "Thomas", age: 88},
         {id: 10, name: "Charles", age: 98},
         {id: 11, name: "Christopher", age: 100},
     ]
     const topCars = [
         {manufacturer: 'BMW', model: 'm5cs'},
         {manufacturer: 'Mercedes', model: 'e63s'},
         {manufacturer: 'Audi', model: 'rs6'},
         {manufacturer: 'Mercedes', model: 'e63s'},
         {manufacturer: 'Mercedes', model: 'e63s'},
         {manufacturer: 'Mercedes', model: 'e63s'},

     ];*/

    /*const myFirstSubscriberFirst = () => {*/
    /*    console.log("Hello Vasya");*/
    /*}*/
    /*const myFirstSubscriberSecond = () => {*/
    /*    console.log("Hello Ivan");*/
    /*}*/

    const Button1Foo = (name: string, age: number) => {
        console.log(`I'm ${name}. My age : ${age}`);
    }
    const Button2Foo = (name: string) => {
        console.log(`I'm ${name}`);

    }
    const Button3Foo = () => {
        console.log("I'm stupping button");
    }

    let [a, setA] = useState(1)
    const onClickHand = () => {
        setA(++a);
        console.log(a);
    }
    const onClickHandReset = () => {
        setA(0)
    }

    return (
        <div className="App">
            {/* <Header title={'New Header'}/>
            <Body titleForBody={'New Body'}/>
            <Footer titleForFooter={'New Footer'}/>
            <NewComponent students={students}/>
            <ComponentWork topcars={topCars}/>*/}

            {/* <Button name={'MyYouTubeChannel-1'} callBack={() => Button1Foo('Stas', 38)}/>
            <Button name={'MyYouTubeChannel-2'} callBack={() => Button2Foo('Ivan')}/>
            <Button name={'Stypid button'} callBack={Button3Foo}/>*/}


            <h1>{a}</h1>
            <button onClick={onClickHand}>Number</button>
            <button onClick={onClickHandReset}>Reset</button>


        </div>
    );
}

export default App;
