import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Card({card}) {
    return(
        <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
                <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">{card.plan}</h5>
                    <h6 class="card-price text-center">${card.price}<span class="period">/month</span></h6>
                    <hr></hr>
                    <ul class="fa-ul">
                    {
                     card.features.map((items)=> {
                     return <li className={`${items.IsEnable ? "" :"text-muted"}`}> 
                        <i><FontAwesomeIcon icon={items.IsEnable ? faCheck : faXmark}/> </i>
                        <span>
                            {
                                items.IsBold ? <strong>{items.title}</strong> : items.title
                            }
                        </span>
                        </li>
                     })
                    }
                    </ul>
                    <div class="d-grid">
                     <a href="#" class="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card;