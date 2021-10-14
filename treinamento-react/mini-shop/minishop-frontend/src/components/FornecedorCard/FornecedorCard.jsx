import { Card, CardActions, CardContent, CardHeader, Collapse } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton"
import { styled } from "@material-ui/core/styles"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import React from "react";
import "./FornecedorCard.css"

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function FornecedorCard(props) {
  const [extendido, setExtendido] = React.useState(false);

  const expandirCard = () => {
    setExtendido(!extendido)
  };

  const local = props.fornecedor.city + ", " + props.fornecedor.country;

  return (
    <Card className="fornecedorCard">
      <CardHeader className="header"
        title={props.fornecedor.companyName}
        subheader={local}
      />
      <CardContent>
        <Typography variant="h6" component="h3">Responsável: <Typography variant="body1" component="span">{props.fornecedor.contactName}</Typography>
        </Typography>
        <Typography variant="h6" component="h3">Telefone:
          <Typography variant="body1" component="span">{props.fornecedor.phone}</Typography>
        </Typography>
      </CardContent>
      <CardActions disableSpacing className="expansao">
        <Typography variant="body1" component="h4">PRODUTOS</Typography>
        <ExpandMore
          expand={extendido}
          onClick={expandirCard}
          aria-expanded={extendido}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={extendido} timeout="auto" unmountOnExit >
        <CardContent className="expansao">
          <ul className="listaProdutos">
            {props.fornecedor.products.map((item, index) => {
              return (
                <li key={index}>{item.productName}</li>
              );
            })}
          </ul>
        </CardContent>
      </Collapse>
    </Card>
  );
}