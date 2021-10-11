import "./CustomerCard.css"
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const CustomerCard = (props) => {
    return ( 
    <Card className="customer-card">
      <CardActionArea>
        <CardContent>
          <div className="card-container">
            <Typography component="h3">{props.customer.firstName}</Typography>
            <Typography component="h3">{props.customer.lastName}</Typography>
            <Typography component="p">{props.customer.city}</Typography>
            <Typography component="p">{props.customer.country}</Typography>
            <Typography component="p">{props.customer.phone}</Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
    );
}
 
export default CustomerCard;