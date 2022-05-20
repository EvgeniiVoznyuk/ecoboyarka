import React from 'react';
import {
  Container,
  Flex,
  Text,
  Image,
  Box,
  UnorderedList,
  ListItem,
  Heading,
} from '@chakra-ui/react';
import wastepaper from '../../img/wastepaper/wastepaper.png';
import paper from '../../img/wastepaper/paper.jpeg';

const WastePaper = () => {
  return (
    <Flex backgroundColor="white.300" justifyContent="center" w="100%">
      <Container maxW="1400px" p="40px 30px">
        <Flex direction="column" gridGap="50px">
          <Heading
            textAlign="center"
            fontSize="48px"
            fontWeight="700"
            color="green.100"
          >
            Роздільний збір, прийом та вивіз макулатури
          </Heading>
          <Flex justifyContent="space-evenly">
            <Image src={wastepaper} maxW="500px" maxH="500px" />
            <Box maxW="500px">
              <Text fontSize="18px" fontWeight="400">
                Наша компанія на постійній основі купує макулатуру практично
                всіх видів та марок для подальшої її переробки починаючи з
                06.06.2016.
                <br />
                Основні марки макулатури які ми приймаємо та вивозимо :
              </Text>
              <UnorderedList fontSize="18px" fontWeight="400">
                <ListItem>
                  А4 білий, офісний друкований та недрукований папір, білий
                  архівний папір, плакатний папір, папір білий для малювання,
                  друку; Білий папір всіх розмірів. <br /> Марки (МС-1А, МС-2А,
                  МС-3А)
                </ListItem>
                <ListItem>
                  Гофрокартон, картонні коробки, картонні прокладки, паперові
                  мішки, вся картонна упаковка та продукція. Найголовніше що все
                  було б упаковано в складеному вигляді. Для зручного
                  транспортування. <br /> Марки (МС-5Б, МС-6Б, МС-13Б)
                </ListItem>
                <ListItem>
                  Використані картонні (паперові) тубуси, втулки, куточки,
                  кріплення, гільзи та інші паперові відходи після виробництва.{' '}
                  <br /> Марки (МС-9Б)
                </ListItem>
              </UnorderedList>
            </Box>
          </Flex>

          <Flex justifyContent="space-evenly">
            <Flex direction="column" gridGap="20px" maxW="500px">
              <Text fontSize="18px" fontWeight="400">
                Перед здачею макулатури, паперу на переробку нашої компанії вона
                у вас повинна бути в складеному та упакованому вигляді.
                Вітається коли картонні коробки, складені в інші картонні
                коробки або розкладені та перемотані скотчем, стрейчем або
                мотузками. Офісна, архівна макулатура як і книги, журнали також
                можуть бути упаковані в картонні коробки або перемотані скотчем
                або мотузками. Для зручного подальшого транспортування.
              </Text>
              <Text fontSize="18px" fontWeight="400">
                Макулатура може бути доставлена вашим транспортом до нас на
                склад у м. Боярка завжди шість днів на тиждень з понеділка до
                суботи в будь-якій кількості. У разі об&apos;єму понад 300 кг
                можлива безкоштовна подача нашого вантажного транспорту для
                вивезення вашої макулатури, а також інших видів відходів
                вторинної сировини та металобрухту. При подачі вантажного
                транспорту для вивезення паперу надаються двоє вантажників для
                оперативного зважування та завантаження паперу.
              </Text>
            </Flex>
            <Image src={paper} maxW="500px" maxH="500px" />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default WastePaper;
