<template>
	<view>
		开始训练
		<button @click="sqlTest()">测试连接</button>
	</view>
</template>

<script>
	import {
		isOpened,
		openDb,
		closeDb,
		selectSql,
		executeSql
	} from '@/utils/sql/sql';
	export default {
		data() {
			return {

			}
		},
		methods: {
			sqlTest() {
				const name = 'train_M';
				const path = '_doc/train.db';

				if (isOpened(name, path)) {
					const insertSql = 'INSERT INTO "train"("train_total_weight", "train_total_set", "train_total_movement", "train_feeling", "train_title") VALUES (\'500.0\', \'15\', \'Bench_Press\', \'happy\', \'卧推\');'
					executeSql(name, insertSql).then(result => {
						const sql = 'select train_total_weight,train_total_set from train';
						selectSql(name, sql).then(result => {
							console.log(result);
						})
					})


				} else {
					openDb(name, path).then(() => {
			 		const sql = 'select train_total_weight,train_total_set from train';
						selectSql(name, sql).then(result => {
							console.log(result);
						});
					});
				}
			}
		},
		onLoad() {
			const createTableSql = 'CREATE TABLE "train" ("train_total_weight" REAL(100000) NOT NULL, "train_total_set" integer(1000) NOT NULL,  "train_total_movement" integer(100) NOT NULL,  "train_feeling" TEXT(200),  "train_title" TEXT(50),  PRIMARY KEY ("train_total_weight"));'
			const name = 'train_M';
			const path = '_doc/train.db';
			openDb(name, path).then(() => {
				const sql = 'select train_total_weight,train_total_set from train'
				executeSql(name, createTableSql).then(result => {
					console.log('executeSql', result)
				})
			})
		}
	}
</script>

<style>

</style>
