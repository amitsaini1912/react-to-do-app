import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./InfoBox.css"


export default function InfoBox({info}) {
    return (
        <div className='InfoCard'>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="#"
                        alt="Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <b>
                            <p>humidity:-{info.humidity}</p>
                            <p>Temprature:-{info.temp}</p>
                            <p>Temprature Max. :-{info.tempMax}</p>
                            <p>Temprature Min. :-{info.tempMin}</p>
                            <p>Weather:-{info.weather}</p>
                          </b>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}