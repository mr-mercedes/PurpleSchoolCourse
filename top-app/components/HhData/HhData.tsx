import {HhDataProps} from "@/components/HhData/HhData.props";
import React, {JSX} from "react";
import styles from "./HhData.module.css";
import {Card} from "@/components";
import StarIcon from "@/public/hh_star.svg";
import {priceRu} from "@/helpers/helpers";

export const HhData = ({count, juniorSalary, middleSalary, seniorSalary}: HhDataProps): JSX.Element => {
    return (
        <div className={styles.hh}>
            <Card className={styles.count}>
                <div className={styles.title}>Всего вакансий</div>
                <div className={styles.countValue}>{count}</div>
            </Card>
            <Card className={styles.salary}>
                <div>
                    <div className={styles.title}>Начальный</div>
                    <div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
                    <div className={styles.rate}>
                        <StarIcon className={styles.filled}/>
                        <StarIcon/>
                        <StarIcon/>
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Средний</div>
                    <div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
                    <div className={styles.rate}>
                        <StarIcon className={styles.filled}/>
                        <StarIcon className={styles.filled}/>
                        <StarIcon/>
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Профессианал</div>
                    <div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
                    <div className={styles.rate}>
                        <StarIcon className={styles.filled}/>
                        <StarIcon className={styles.filled}/>
                        <StarIcon className={styles.filled}/>
                    </div>
                </div>
            </Card>
        </div>)
}