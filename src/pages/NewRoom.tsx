import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

import '../styles/auth.scss';
import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useAuth } from '../hooks/useAuth';

import { FormEvent } from 'react';


export function NewRoom() {
    //const { user } = useAuth();

    const [newRoom, setNewRoom] = useState('');

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();
    }

    return (
       <div id='page-auth'>
           <aside>
               <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
               <strong>Crie salas de Q&amp;A ao-vivo</strong>
               <p>Tire as dúvidas da sua audiência em tempo-real</p>
           </aside>
           <main>
               <div className='main-content'>
                   <img src={logoImg} alt='Letmeask' />
                   <h2>Criar uma nova sala</h2>
                   
                   <form onSubmit={handleCreateRoom}>
                       <input 
                            type="text"
                            placeholder='Nome da sala'
                            onChange={event => setNewRoom(event.target.value)} 
                            value={newRoom}

                       />
                       <Button type='submit'>
                           Criar sala
                       </Button>
                   </form>
                   <p>
                       Quer entrar em uma sala existente?<Link to='/'>clique aqui</Link>
                   </p>
               </div>
           </main>
       </div> 
    )
}