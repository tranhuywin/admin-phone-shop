import "./newProduct.css";
import { useState } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';

export default function NewProduct() {
    const [Spec, setSpec] = useState([{key:'', value:''}]);
    const [Memories, setMemories] = useState([{Ram: '', Rom: '', colors: [{HexRGB: '', originalPrice: '', price: '', marketPrice: '', quantity: '', images: ''}]}]);
    const addSpec = () => {
        setSpec([...Spec, {key:'', value:''}]);
    }

    const removeSpec = (index) => {
        const newSpec = [...Spec];
        newSpec.splice(index, 1);
        setSpec(newSpec);
    }

    const onChangeSpec = (e, index) => {
        const newSpec = [...Spec];
        newSpec[index][e.target.name] = e.target.value;
        setSpec(newSpec);
    }

    const addMemory = () => {
        setMemories([...Memories, {ram: '', rom: '', colors: [{HexColor: '', originalPrice: '', price: '', marketPrice: '', quantity: '', images: ''}]}]);
    }

    const removeMemory = (index) => {
        const newMemories = [...Memories];
        newMemories.splice(index, 1);
        setMemories(newMemories);
    }

    const onChangeMemory = (e, index) => {
        const nameNeedConvertToInt = ['Ram', 'Rom'];
        const newMemories = [...Memories];
        newMemories[index][e.target.name] = nameNeedConvertToInt.includes(e.target.name) ? parseInt(e.target.value) : e.target.value;
        setMemories(newMemories);
    }

    const addColor = (index) => {
        const newMemories = [...Memories];
        newMemories[index].colors = [...newMemories[index].colors, {HexColor: '', originalPrice: '', price: '', marketPrice: '', quantity: '', images: ''}];
        setMemories(newMemories);
    }

    const removeColor = (index, index2) => {
        const newMemories = [...Memories];
        newMemories[index].colors.splice(index2, 1);
        setMemories(newMemories);
    }

    const onChangeColor = (e, index, index2) => {
        const nameNeedConvertToInt = ['originalPrice', 'price', 'marketPrice', 'quantity'];
        const newMemories = [...Memories];
        newMemories[index].colors[index2][e.target.name] = nameNeedConvertToInt.includes(e.target.name) ? parseInt(e.target.value) : e.target.value;
        newMemories[index].colors[index2].image = "https://i1-sohoa.vnecdn.net/2021/12/27/iphone13-1640609034-1640609046-5691-1640609169.png?w=300&h=180&q=100&dpr=1&fit=crop&s=_iY3_uo8urLoD9r6tLKalQ";
        setMemories(newMemories);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataForm = new FormData(e.target);
        const data = {
            name: dataForm.get('name'),
            description: dataForm.get('description'),
            brand: dataForm.get('brand'),
            thumbnail: "https://i1-sohoa.vnecdn.net/2021/12/27/iphone13-1640609034-1640609046-5691-1640609169.png?w=300&h=180&q=100&dpr=1&fit=crop&s=_iY3_uo8urLoD9r6tLKalQ",
            specifications: Spec,
            memoryPhone: Memories,
            quantity: 100,
        }
        const access_token = Cookies.get("access_token");
        axios.post('https://twin-shop.herokuapp.com/products', {
            ...data,
        },
        {
            headers: {
                'Authorization': 'Bearer ' + access_token,
            },
        })
        .then(res => {
            alert("Th??m th??nh c??ng, id " + res.data.id);
        })
    }

    return (
        <div className="newProduct">
            <h1 className="addProductTitle">Th??m s???n ph???m</h1>
            <form className="addProductForm" onSubmit={handleSubmit}>
                <div className="newUserItem">
                    <label>T??n s???n ph???m</label>
                    <input type="text" name="name" placeholder="Iphone 11 pro" />
                </div>
                <div className="newUserItem">
                    <label>M?? t???</label>
                    <input type="text" name="description" placeholder="l?? ??i???n tho???i c???a apple" />
                </div>
                <div className="newUserItem">
                    <label>Th????ng hi???u</label>
                    <input type="text" name="brand" placeholder="Apple" />
                </div>
                <div className="newUserItem">
                    <label>Thumbnail</label>
                    <input type="file" name="thumbnail" id="thumbnail" style={{ margin: "0 12px", border: "none" }}/>
                </div>
                {/*thong so ky thuat*/}
                <div className="addProductItem" style={{width: "100%"}}>
                    <label>Th??ng s??? k??? thu???t</label>
                    {Spec.map((value, index)=>{
                        return(                    
                        <div class="gr-input" style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
                            <input type="text" placeholder="key" name='key' onChange={(e)=>onChangeSpec(e, index)}/>
                            <input
                                type="text"
                                placeholder="gi?? tr???"
                                style={{ margin: "0 12px" }}
                                name='value' onChange={(e)=>onChangeSpec(e, index)}
                            />
                            <button type="button" className="addProductButton" onClick={() => removeSpec(index)} style={{width: "50px", backgroundColor: "red", margin: "5px 0"}}>x??a</button>
                        </div>
                        );
                    })}
                    <button type="button" onClick={addSpec} className="addProductButton" style={{width: "200px"}}>Th??m th??ng s???</button>
                </div>
                {/*Bo nho*/}
                <div className="addProductItem" style={{border: "1px solid gray", padding: "10px 20px 20px 20px", borderRadius: "5px"}}>
                    <label>B??? nh??? s???n ph???m</label>
                    {Memories.map((memory, indexM)=> {
                        return(
                            <>
                             <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <input type="text" placeholder="Ram" name="Ram" onChange={(e)=> onChangeMemory(e, indexM)}/>
                                <input type="text" placeholder="Rom" style={{ margin: "0 12px" }} name="Rom" onChange={(e)=> onChangeMemory(e, indexM)}/>
                                <button type="button" className="addProductButton" onClick={()=> removeMemory(indexM)} style={{width: "50px", backgroundColor: "red",  margin: "5px 0"}}>x??a</button>
                            </div>
                            <div className="addProductItem" style={{paddingLeft: "20px"}}>
                                {/* mau sac */}
                                {
                                    memory.colors.map((color, index)=>{
                                    return(
                                        <>
                                        <label style={{fontSize: "12px"}}>M??u</label>
                                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                            <input type="text" placeholder="M?? m??u HexRGB" name="HexRGB" onChange={(e)=> onChangeColor(e, indexM, index)}/>
                                            <input type="number" placeholder="Gi?? g???c" style={{ margin: "0 12px", width: "100px" }}  name="originalPrice" onChange={(e)=> onChangeColor(e, indexM, index)}/>
                                            <input type="number" placeholder="Gi??" style={{ margin: "0 12px", width: "100px" }} name="price" onChange={(e)=> onChangeColor(e, indexM, index)}/>
                                            <input type="number" placeholder="Gi?? khuy???n m??i" style={{ margin: "0 12px", width: "100px"}} name="marketPrice" onChange={(e)=> onChangeColor(e, indexM, index)}/>
                                            <input type="number" placeholder="S??? l?????ng" style={{ margin: "0 12px", width: "100px" }} name="quantity" onChange={(e)=> onChangeColor(e, indexM, index)}/>
                                            <input type="file" id="file" style={{ margin: "0 12px", border: "none" }}  name="images" onChange={(e)=> onChangeColor(e, indexM, index)}/>
                                            <button type="button" className="addProductButton" onClick={()=>removeColor(indexM, index)} style={{width: "50px", backgroundColor: "red",  margin: "5px 0"}}>x??a</button>
                                        </div>
                                        </>
                                    )
                                    })
                                }
                                <button type="button" className="addProductButton" onClick={()=>addColor(indexM)} style={{width: "150px"}}>Th??m M??u</button>
                            </div>
                            </>
                        );
                    })}
                <button type="button" onClick={addMemory} className="addProductButton" style={{width: "200px"}}>Th??m b??? nh???</button>
                </div>
                <button type="submit"  style={{width: "300px", marginBottom: "20px"}} className="addProductButton">T???o</button>
            </form>
        </div>
    );
}
