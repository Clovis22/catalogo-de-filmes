import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertInMovie1714731825974 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            INSERT INTO movie("id","name","description") VALUES (1, 'Senhor dos Aneis: Aneis do poder', 'Trilogia cinematográfica dirigida por Peter Jackson.');
            INSERT INTO movie("id","name","description") VALUES (2, 'Os Vingadores', 'Filme de super-heroi estadunidense de 2012, baseado na equipe Vingadores da Marvel Comics.');
            INSERT INTO movie("id","name","description") VALUES (3, 'Avatar', 'Filme produzido pela Lightstorm Entertainment e distribuido pela 20th Century Fox, tem seu enredo localizado no ano 1867.');
            INSERT INTO movie("id","name","description") VALUES (4, 'Liga da Justica', 'filme de super-heroi estadunidense de 2017, baseado na equipe homonima da DC Comics, distribuido pela Warner Bros. Pictures, sendo o quinto filme do Universo Estendido DC.');
            INSERT INTO movie("id","name","description") VALUES (5, 'Interstellar', 'filme anglo-americano de ficção científica dirigido por Christopher Nolan e estrelado por Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Mackenzie Foy, Matt Damon, John Lithgow e Michael Caine.');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            DELETE FROM public.movie;
        `);
    }

}
