import {getRandomValue, createUniqueRandomValue} from './utils/utils';

// Описание фотографий.

const DESCRIPTIONES = [
  'Закат у моря',
  'Букет черемши',
  'Осенний пейзаж в горах',
  'Покорение космоса',
  'Первый день на работе',
  'Встреча одноклассников',
  'Новогодний праздник в кругу семьи',
  'Тишина в раннем лесу',
  'Новый месяц над рекой',
  'Сумерки в деревне',
  'Отражение гор в озере',
  'Час пик в метро'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо.',
  'Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Джордж',
  'Бред',
  'Квентин',
  'Хулио Альварес',
  'Жерар Пике',
  'Андрес Иньеста',
  'Пуйоль',
  'Луис Суарес',
  'Сергей Даду',
  'Имоджен Путс',
  'Скарлетт'
];

const POST_SCORE = 25;

const LikesQuantity = {
  MIN: 15,
  MAX: 200,
};

const CommentsQuantity = {
  MIN: 0,
  MAX: 30,
};

const CommentLenght = {
  MIN: 1,
  MAX: 2,
};

const AvatarID = {
  MIN: 1,
  MAX:6,
};

const maxCommentsId = 500;


// Получим рандомные значения для ID фото, адреса картинки и ID комментария.

const randomUniquePhotoId = createUniqueRandomValue(1, POST_SCORE);
const randomUniqueUrl = createUniqueRandomValue(1, POST_SCORE);
const randomUniqueСommentId = createUniqueRandomValue(1, maxCommentsId);
const randomUniqueAvatarID = createUniqueRandomValue(AvatarID.MIN, AvatarID.MAX);

// Функция, возвращающая случайный элемент из любого массива.

const getRandomArrayElement = function (elements) {
  return elements[getRandomValue(0, elements.length - 1)];
};

// Функция, возвращающая случайное число для составления комментария.

const getRandomCommentsLength = function () {
  return getRandomValue(CommentLenght.MIN, CommentLenght.MAX);
};

// Функция, возвращающая объект комментария.

const createComment = function () {
  const messagesQuantity = [];
  while (messagesQuantity.length < getRandomCommentsLength()) {
    messagesQuantity.push(getRandomArrayElement(MESSAGES));
  }
  return {
    id: randomUniqueСommentId(),
    avatar: `img/avatar-${randomUniqueAvatarID()}.svg`,
    message: messagesQuantity,
    name: getRandomArrayElement(NAMES),
  };
};

//Функция, создающая объект.

const createPublication = function () {
  const comments = Array.from({length: getRandomValue(CommentsQuantity.MIN, CommentsQuantity.MAX)}, createComment);
  return {
    id: randomUniquePhotoId(),
    url: `photos/${randomUniqueUrl()}.jpg`,
    descriotion: getRandomArrayElement(DESCRIPTIONES),
    likes: getRandomValue(LikesQuantity.MIN, LikesQuantity.MAX),
    comments,
  };
};

// Создаем массв объектов.

const createPublications = function () {
  return Array.from({length: POST_SCORE},createPublication);
};
export {createPublications};
