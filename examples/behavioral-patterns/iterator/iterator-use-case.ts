// (AnyProduct) Interface que representa uma música
interface Music {
  play(): void;
}

// (ConcreteAnyProduct) Músicas Concretas
class LocalMusic implements Music {
  play(): void {
    console.log('Tocando música local...');
  }
}

class StreamingMusic implements Music {
  play(): void {
    console.log('Tocando música de streaming...');
  }
}

class RadioMusic implements Music {
  play(): void {
    console.log('Tocando música da rádio...');
  }
}

// (Iterator) Interface para criar iteradores para listas de reprodução
interface PlaylistIterator {
  current(): Music;
  next(): Music;
  hasNext(): boolean;
}

// (ConcreteIterator) Iteradores concretos para diferentes fontes de músicas
class LocalPlaylistIterator implements PlaylistIterator {
  private _playlist: LocalPlaylist;
  private _index = 0;

  constructor(playlist: LocalPlaylist) {
    this._playlist = playlist;
  }

  current(): Music {
    return this._playlist.getMusic(this._index);
  }

  next(): Music {
    const music = this._playlist.getMusic(this._index);
    this._index += 1;
    return music;
  }

  hasNext(): boolean {
    return this._index < this._playlist.getCount();
  }
}

class StreamingPlaylistIterator implements PlaylistIterator {
  private _playlist: StreamingPlaylist;
  private _index = 0;

  constructor(playlist: StreamingPlaylist) {
    this._playlist = playlist;
  }

  current(): Music {
    return this._playlist.getMusic(this._index);
  }

  next(): Music {
    const music = this._playlist.getMusic(this._index);
    this._index += 1;
    return music;
  }

  hasNext(): boolean {
    return this._index < this._playlist.getCount();
  }
}

class RadioPlaylistIterator implements PlaylistIterator {
  private _playlist: RadioPlaylist;
  private _index = 0;

  constructor(playlist: RadioPlaylist) {
    this._playlist = playlist;
  }

  current(): Music {
    return this._playlist.getMusic(this._index);
  }

  next(): Music {
    const music = this._playlist.getMusic(this._index);
    this._index += 1;
    return music;
  }

  hasNext(): boolean {
    return this._index < this._playlist.getCount();
  }
}

// (Aggregate) Interface para listas de reprodução
interface Playlist {
  createIterator(): PlaylistIterator;
}

// (ConcreteAggregate) Listas de reprodução concretas para diferentes fontes de músicas
class LocalPlaylist implements Playlist {
  private _musics: LocalMusic[] = [];

  addMusic(music: LocalMusic): void {
    this._musics.push(music);
  }

  getMusic(index: number): LocalMusic {
    return this._musics[index];
  }

  getCount(): number {
    return this._musics.length;
  }

  createIterator(): PlaylistIterator {
    return new LocalPlaylistIterator(this);
  }
}

class StreamingPlaylist implements Playlist {
  private _musics: StreamingMusic[] = [];

  addMusic(music: StreamingMusic): void {
    this._musics.push(music);
  }

  getMusic(index: number): StreamingMusic {
    return this._musics[index];
  }

  getCount(): number {
    return this._musics.length;
  }

  createIterator(): PlaylistIterator {
    return new StreamingPlaylistIterator(this);
  }
}

class RadioPlaylist implements Playlist {
  private _musics: RadioMusic[] = [];

  addMusic(music: RadioMusic): void {
    this._musics.push(music);
  }

  getMusic(index: number): RadioMusic {
    return this._musics[index];
  }

  getCount(): number {
    return this._musics.length;
  }

  createIterator(): PlaylistIterator {
    return new RadioPlaylistIterator(this);
  }
}

/***************
 * CLIENT CODE *
 ***************/

// O código do cliente recebe uma lista de reprodução e a percorre usando um iterador.
function clientCode(playlist: Playlist): void {
  const iterator = playlist.createIterator();

  while (iterator.hasNext()) {
    iterator.next().play();
  }
}

const localPlaylist = new LocalPlaylist();
localPlaylist.addMusic(new LocalMusic()); // Saída: "Tocando música local..."
localPlaylist.addMusic(new StreamingMusic()); // Saída: "Tocando música de streaming..."
localPlaylist.addMusic(new RadioMusic()); // Saída: "Tocando música da rádio..."

clientCode(localPlaylist);
