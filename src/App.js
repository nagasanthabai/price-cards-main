import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from './Card'

function App() {
  let priceCards=
  [
    {
      plan:"Free",
      price:"0",
      features:
      [
        {
          title:"Single Users ",
          IsEnable:true
        },
        {
          title:"5 GB storege",
          IsEnable:true
        },
        {
          title:"Unlimited Public Projects",
          IsEnable:true
        },
        {
          title:"Community Access",
          IsEnable:true
        },
        {
          title:"Unlimited Private Projects"
        },
        {
          title:"Dedicated Phone Support"
        },
        {
          title:"Free Subdomain"
        },
        {
          title:"Monthly Status Reports"
        }
      ]
    },
    {
      plan:"PLUS",
      price:"9",
      features: [
      {
        title:"5 Users ",
        IsEnable:true,
        IsBold:true
      },
      {
        title:"50 GB storege",
        IsEnable:true
      },
      {
        title:"Unlimited Public Projects",
        IsEnable:true
      },
      {
        title:"Community Access",
        IsEnable:true
      },
      {
        title:"Unlimited Private Projects",
        IsEnable:true
      },
      {
        title:"Dedicated Phone Support",
        IsEnable:true
      },
      {
        title:"Free Subdomain",
        IsEnable:true
      },
      {
        title:"Monthly Status Reports"
      }
    ]
    },
    {
      plan:"PRO",
      price:"49",
      features:
      [
        {
          title:"Unlimited Users ",
          IsEnable:true,
          IsBold:true
        },
        {
          title:"150 GB storege",
          IsEnable:true
        },
        {
          title:"Unlimited Public Projects",
          IsEnable:true
        },
        {
          title:"Community Access",
          IsEnable:true
        },
        {
          title:"Unlimited Private Projects",
          IsEnable:true
        },
        {
          title:"Dedicated Phone Support",
          IsEnable:true
        },
        {
          title:"Unlimited Free Subdomain",
          IsEnable:true
        },
        {
          title:"Monthly Status Reports",
          IsEnable:true
        }
      ]
    }
  ]
  return (
  <section class="pricing py-5">
    <div className="container">
      <div className="row mt-3">
        {
          priceCards.map((list)=>{
            return <Card card={list}></Card>
          })
        }
      </div>
    </div>
  </section>  
);
}
export default App;

  