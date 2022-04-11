import { type } from '@testing-library/user-event/dist/type';
import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StringMappingType } from 'typescript';


import logoImg from '..//assets/images/logo.svg';
import { Button } from '../components/Button';
import { Question } from '../components/question';
import { RoomCode } from '../components/RoomCode';
//import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';



import '../styles/room.scss';




type RoomParams = {
    id: string;
}

export function AdminRoom() {
    //const { user } = useAuth();
    const params = useParams<RoomParams>(); //generic parametro que passa para tipagem
    const roomId = params.id;
    
    
    const { title, questions} = useRoom(roomId);


    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <div>
                        <RoomCode code={roomId} />
                        <Button isOutlined>Encerrar Sala</Button>
                    </div>
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    {questions.length > 0 && <span>{questions.length} perguntas</span>}
                </div>

                {questions.map(question => {
                    return (
                        <Question
                            key={question.id}
                            content={question.content}
                            author={question.author}
                         />
                    );
                })}
            </main>
        </div>
    );
}

// algoritmo de reconcialiação em react