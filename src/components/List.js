import React from 'react'
import Item from './Item'
import Axios from 'axios'
import { useEffect, useState } from "react";
import {FaBookMedical} from "react-icons/fa"
import {BrowserRouter as Router,Switch , Route,Link} from 'react-router-dom'
import './List.css'
import {AiFillBook,AiOutlineLink} from 'react-icons/ai'
import {FaRupeeSign} from 'react-icons/fa'
import Display from './Display';

// https://m.media-amazon.com/images/I/51C9SgZu4vL.jpg
// This is a cartoon book, helps children learn counting with cartoon characters and playful games and exercises. 
// const a =[
//     {'id' : 1 ,'category' : 'behavioural' , 'name' : 'Chetan Bhagat (Pack of Two Books)','price':999, 'link' : "https://images-na.ssl-images-amazon.com/images/I/61LyLHnTsyL.jpg",
//     'desc' : 'It tells about a IIT coaching class tutor who goes to wish his ex-girlfriend on her birthday and finds her murdered. The rest of the story is his journey where he stands by his ex-girlfriend after her death to find justice. The book also addresses the stereotypes and political issues in India.'
// },
//     {'id' : 2 ,'category' : 'behavioural' ,'name' : 'The Earned Leadership Factor','price':899, 'link' : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN7LNQkbFHz9rVSou55nFYRrKIYt7NkO9YNzPPVNHzlRD5zf9ftADjiDW74UHo3QEG8bs&usqp=CAU",
//     'desc' : 'The aim is to simplify the subject of leadership in a most understanding fashion. Furthermore, it clarifies the steps in leadership design and characteristics associated with it. The subject composed of ten letters, each representing a powerful word that develops the most admired topic in the modern day organizations called " LEADERSHIP. "'
// },
//     {'id' : 3 ,'category' : 'behavioural' ,'name' : 'Bakery Products By W. Zhou','price':299, 'link' : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHRDU55BaDwkPfV-fftNdFdCp17NIGc2YFA&usqp=CAU",
//     'desc' : 'Baking is a process that has been practiced for centuries, and bakery products range in complexity from the simple ingredients of a plain pastry to the numerous components of a cake. While currently there are many books available aimed at food service operators, culinary art instruction '
// },
//     {'id' : 4 ,'category' : 'behavioural' ,'name' : 'Hooked ! By NIR EYAL','price':1999, 'link' : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfEL6HSg_Z84-2EGKyTCR9FTqSNTMj7xA0Q&usqp=CAU",
//     'desc' : 'Hooked is about helping customers build habits around using your products, so they reengage with your solution automatically. This book is for entrepreneurs, product managers, marketers, and anyone else interested in creating habit-forming products.'
// },
//     {'id' : 5 ,'category' : 'behavioural' ,'name' : 'Design of EveryDay Things','price':599, 'link' : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJznmfP26308Sp4YlIinxAp1Snh1bYZht1gA&usqp=CAU",
//     'desc' : 'The Design of Everyday Things shows that good, usable design is possible. The rules are simple: make things visible, exploit natural relationships that couple function and control, and make intelligent use of constraints. The goal: guide the user effortlessly to the right action on the right control at the right time.'
// },
//     {'id' : 6 ,'category' : 'kids' ,'name' : 'Ruby finds a Worry','price':599, 'link' : "https://images-na.ssl-images-amazon.com/images/I/81sjRE1UznL.jpg",
//     'desc' : 'Meet Ruby -- a happy, curious, imaginative young girl. But one day, she finds something unexpected: a Worry. ... The Big Bright Feelings picture book series provides kid-friendly entry points into emotional intelligence topics -- from being true to yourself to dealing with worries, managing anger, and making friends'
// },
//     {'id' : 7 ,'category' : 'kids' ,'name' : 'The Cat in the Hat','price':599, 'link' : "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1522696125-81rsvYFkGfL.jpg",
//     'desc' : 'The Cat in the Hat is a tall anthropomorphic cat, who wears a red and white-striped hat and a red bow tie and sometimes has an umbrella with him mostly green, blue or red. He is a farm cat of Dr. Seuss short story The Cat in the Hat.'
// },
//     {'id' : 8 ,'category' : 'kids' ,'name' : 'Ruskin Bond','price':599, 'link' : "https://rukminim1.flixcart.com/image/612/612/kkoc70w0/book/s/n/g/great-stories-for-children-original-imafzz5cnps52tbp.jpeg?q=70",
//     'desc' : 'Bonds writings are characterised by their lucidity and simplicity. The stories he wrote for children are mostly written in the first person. They mostly capture the everyday lives of common people and the relationship between nature and human'
// },
//     {'id' : 9 ,'category' : 'kids' ,'name' : 'The Lucky Puppy','price':599, 'link' : "https://m.media-amazon.com/images/I/51-ytMxd7YL.jpg",
//     'desc' : 'Originally published as a Little Golden Book in 1960, Walt Disneys The Lucky Puppy is back in print. This adorable story based on the characters from the beloved animated movie The Hundred and One Dalmatians is back to delight a new generation of boys and girls ages 2 to 5—as well as collectors of all ages!'
// },
//     {'id' : 10 ,'category' : 'kids' ,'name' : 'Alices adventure in Wonderland','price':599, 'link' : "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_960,f_auto/9780141321073_ALICESADVENTURESINWONDERLAND_CMYK_b0wnjm.jpg",
//     'desc' : 'Alices Adventures in Wonderland (commonly Alice in Wonderland) is an 1865 English childrens novel by Lewis Carroll. A young girl named Alice falls through a rabbit hole into a fantasy world of anthropomorphic creatures. It is seen as an example of the literary nonsense genre.'
// }
// ]
// const n = 11;



function List() {
    const [items , setitems] = useState([0])
    const [num , setnum] = useState(0);
    const [category , setcategory] = useState('all');
    const [it , setit] = useState(0)
    var tt = 0;
    const items_arr = [...items]

    useEffect(() =>{
        Axios.get("http://localhost:5000/read").then((response) =>{
            setitems(response.data)
            tt = response.data[response.data.length -1].id
            setnum(tt+1) 
        })
    }, [])

    const remove = (item) =>{
        Axios.delete(`http://localhost:5000/delete/${item.id}`, )
        console.log(item.id)
        Axios.get("http://localhost:5000/read").then((response) =>{
            setitems(response.data)
        })
        
    }

    const block_color = (event) =>{
        var id = event.target.id
        var b1 = document.getElementById('b1')
        var b2 = document.getElementById('b2')
        var b3 = document.getElementById('b3')
        if(id === 'b1'){
            b1.style.backgroundColor = 'rgb(100, 161, 211)'
            b2.style.backgroundColor = 'rgb(182, 207, 228)'
            b3.style.backgroundColor = 'rgb(182, 207, 228)'
            setcategory('all')
        }
        if(id === 'b2' ){
            b2.style.backgroundColor = 'rgb(100, 161, 211)'
            b1.style.backgroundColor = 'rgb(182, 207, 228)'
            b3.style.backgroundColor = 'rgb(182, 207, 228)'
            setcategory('behavioural')
        }
        if(id === 'b3'){
            b3.style.backgroundColor = 'rgb(100, 161, 211)'
            b2.style.backgroundColor = 'rgb(182, 207, 228)'
            b1.style.backgroundColor = 'rgb(182, 207, 228)'
            setcategory('kids')
        }
    }
    
    const add = ()=>{
        var modal = document.getElementById("Modal");
        modal.style.display = "block"
    }

    const addpro = async () =>{
        var modal = document.getElementById("Modal");
        
        const z = await Axios.post("http://localhost:5000/insert" , {
            id:num,
            name : document.getElementById('name').value,
            price : document.getElementById('price').value,
            link : document.getElementById('link').value,
            desc : document.getElementById("desc").value,
            cat : document.getElementById("cat").value.toLowerCase()
        })
        Axios.get("http://localhost:5000/read").then((response) =>{
            console.log("Reading....")
            setitems(response.data)
            tt = response.data[response.data.length -1].id
            setnum(tt+1)
        })
        modal.style.display = "none"
    }

    const close = () =>{
        var mod = document.getElementById("Modal");
        mod.style.display = "none"
    }

    const item_track  =(item) =>{
        setit(item)
    }


  return (
    <div className = "List">
        <div className='inner-bar'>
            <div id = "b1" onClick = {block_color} className = 'block'>All Books </div>
            <div id = "b2" onClick = {block_color} className = 'block'>Behavioural Books </div>
            <div id = "b3" onClick = {block_color} className = 'block'>Kids Books </div>
            {/* <a  onClick = {add} className='add' ><i ><FaBookMedical/></i></a> */}
        </div>
        {/* <div className ='line'></div> */}
        <div id = "Modal" className = "Modal">
            <div className="modal-content">
                <div className='title'>
                    <p className = "font">Add a New Book...</p>
                    <span onClick = {close}>X</span>
                </div>
                <p>Product Name</p>
                <i className='b'><AiFillBook/></i>
                <input placeholder = "Book Name" id = "name" type = "text"></input>
                <p>Product Category</p>
                <i className='c'><AiFillBook/></i>
                <input placeholder = "Book Category" id = "cat" type = "text"></input>
                <p>Product Description</p>
                <i className='d'><AiFillBook/></i>
                <input placeholder = "Book Description" id = "desc" type = "text"></input>
                <p>Product Price</p>
                <i className='ru'><FaRupeeSign/></i>
                <input placeholder = "Book Cost" id = "price" type = "text"></input>
                <p>Product Image Link</p>
                <i className='lin'><AiOutlineLink/></i>
                <input placeholder = "Book Link" id = "link" type = "text"></input>
                <div className = "dot"></div>
                <button className='button' onClick={addpro}>Add Product</button>
            </div>
        </div>
        <Router>
        <div className='container'>
        {
            
            items.map((item) => (
                'all' === category ?
                <div class = "Item-Display-Container">
                <Link className = "link" onClick ={ () => item_track(item) } to = "/item-display"> <Item item = {item}/></Link>
                <button onClick = {() => remove(item)} className='remove'>Remove</button>
                </div>:
                item.category === category ?
                <div class = "Item-Display-Container">
                <Link className = "link" onClick ={ () => item_track(item) } to = "/item-display"><Item item = {item} /></Link>
                <button onClick = {() => remove(item)} className='remove'>Remove</button></div>:
                null
            ))
        }
        </div>
        <Switch>
            <Route exact path = "/item-display">
                <Display item = {it} setit = {setit} items = {items} setitems = {setitems}/>
            </Route>
        </Switch>
        </Router>

        <button className = "create" onClick={add}>Create Product</button>
    </div>
  )
}

export default List