import React, { Component } from 'react';

export default class GameInfoContainer extends Component {
  render() {
    const { gameThumbnail, gameGenre, developerName, video, releaseDate, description } = this.props;
    var splitedPath = gameThumbnail.split('\\');
    const imageSource = `${process.env.REACT_APP_API_ROOT_URL}/Files/Games/${splitedPath[0]}/${splitedPath[1]}/${splitedPath[2]}`;
    const rd = new Date(releaseDate);
    const parsedDate = `${rd.getDay().toString().padStart(2, "0")}/${(rd.getMonth() + 1).toString().padStart(2, "0")}/${rd.getFullYear()}`;
    return (
      <div className={'game-detail-container'}>
        <div className={'youtube-trailer-root'}>
          <iframe src={video}
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
            title='video'
            height={'100%'}
            width={'100%'}
          />
        </div>
        <div className={'game-image-root'}>
          <img src={imageSource} alt='game thumbnail' className={'game-image'} />
          <div className={'game-description'}>
            <p>Descrição: {description}</p>
            <p>Gênero: {gameGenre}</p>
            <p>Desenvolvedor: {developerName}</p>
            <p>Data de lançamento: {parsedDate}</p>
          </div>
        </div>
      </div>
    )
  }
}
