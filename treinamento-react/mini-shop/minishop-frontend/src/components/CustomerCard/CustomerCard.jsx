import "./CustomerCard.css"
import { Card, CardHeader } from "@material-ui/core";
import { Button } from "@material-ui/core";
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import { NavLink } from "react-router-dom";

const CustomerCard = (props) => {
  return (
    <Card className="customer-card">

      <CardHeader
        title={props.customer.firstName}
        subheader={props.customer.phone}
      />
      <Button component={NavLink} to={"/Cliente/" + props.customer.id} title="Detalhes">
        <RemoveRedEyeIcon />
      </Button>
    </Card>
  );
}

export default CustomerCard;