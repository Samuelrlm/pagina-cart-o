import { FcSimCardChip } from "react-icons/fc";
import { LuNfc } from "react-icons/lu";

function App() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-[60%] h-full relative">
        <div className="w-[60%] h-full bg-[#19113f]"></div>
        <div className="w-[40%] h-full"></div>
        <div className="w-full absolute top-0 gap-[25px] flex flex-col">
          <div className="w-[650px] h-[360px] bg-black rounded-2xl mt-[40px] ml-[55px]">
            <div className="w-full h-[30%] flex">
              <div className="w-[30%] h-full flex items-center justify-center gap-[10px]">
                <div className="w-[80px] h-[80px] bg-white rounded-full"></div>
                <div className="w-[60px] h-[60px] bg-white rounded-full"></div>
              </div>
              <div className="w-[70%] h-full flex justify-end p-[10px]">
                <p className="text-white text-[24px]">Nome do banco</p>
              </div>
            </div>
            <div className="w-full h-[70%]">
              <div className="flex items-center ml-[30px]">
                <FcSimCardChip size={90}/>
                <LuNfc size={30} color="#ffffff"/>
              </div>
              <div className="w-full flex items-center pl-[30px] text-white text-[40px]">
                <p>0000 0000 0000 0000</p>
              </div>
              <div className="w-full flex items-center text-white text-[30px] pl-[30px] font-bold">
                <p>Samuel Lima</p>
              </div>
            </div>
          </div>
          <div className="w-[650px] h-[360px] bg-black rounded-2xl ml-[240px]">
            <div className="w-full h-[30%] flex items-end">
              <div className="w-full h-[75%] bg-neutral-900"></div>
            </div>
            <div className="w-full h-[70%] flex justify-center pt-[30px]">
              <div className="w-[80%] h-[60px] bg-gray-400 flex justify-end items-center pr-[15px]">
                <p className="text-black text-3xl">000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[40%] h-full">
        <div className="w-full h-[20%] flex items-center">
          <h1 className="text-[50px]" >Preencha seus dados</h1>
        </div>
        <div className="w-full h-[80%] flex justify-center">
          <form action="" className="w-[70%] flex flex-col gap-[10px]">
              <div className="w-full flex flex-col">
                <label htmlFor="" className="text-[20px]">Nome no cartão</label>
                <input type="text" className="w-full p-[10px] bg-gray-300" />
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="" className="text-[20px]">Número do cartão</label>
                <input type="text" className="w-full p-[10px] bg-gray-300" placeholder="0000 0000 0000 0000" />
              </div>
              <div className="w-full flex">
                <div className="w-[70%] flex flex-col">
                  <label htmlFor="" className="text-[20px]">Data de expiração</label>
                  <div className="w-full flex gap-[5px]">
                    <input type="number" className="w-[45%] p-[10px] bg-gray-300" placeholder="MM" />
                    <input type="number" className="w-[45%] p-[10px] bg-gray-300" placeholder="AA" />
                  </div>
                </div>
                <div className="w-[30%] flex flex-col">
                  <label htmlFor="" className="text-[20px]">CVV</label>
                  <input type="number" className="w-full bg-gray-300 p-[10px]"/>
                </div>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
