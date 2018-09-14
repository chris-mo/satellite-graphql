import satelliteSchema from './satellite';
import swapiSchema from './swapi';
import foaasSchema from './foaas';
import randomUser from './randomUser';

 export default () => [
     swapiSchema,
     satelliteSchema, 
     randomUser,
     foaasSchema
];