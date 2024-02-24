"use client";

import Image from 'next/image'
import styles from "./card.module.css";
import Card from '../UI/Card';
import Button from '../UI/Button';

export default function CourseCard({ course }) {

    const currencyFormatter = (value = 0) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'AED',
            minimumFractionDigits: 0
        }).format(value)
    }

    return (
        <div className={styles.card}>
            <div className={styles.card_header}>
                <Image className={styles.course_bg} src={"https://picsum.photos/400/100"} width={400} height={100} alt='Images for card header background determining course image'/>
                <Image className={styles.course_university_image} src={"https://picsum.photos/100/100"} width={100} height={100}  alt='Images for University'/>
            </div>
            <div className={styles.card_body}>
                <div className={styles.course_name}>{course.course_name}</div>
                <div className={styles.course_univ_country}>{course.university_name},{course.country_name}</div>
                <div className={styles.course_fee_wrapper}>
                    <Card>
                        <div className={styles.course_fee}>
                            <div className={styles.course_fee_text}>{currencyFormatter(course.course_tuition)}</div>
                            <div className="text-sm">Est. Annual Tuition</div>
                        </div>
                    </Card>
                    <Card>
                        <div className={styles.course_fee}>
                            <div className={styles.course_fee_text}>{course.course_duration}</div>
                            <div className="text-sm">Course Duration</div>
                        </div>
                    </Card>
                </div>
                <div className={styles.course_level_scholarship}>{course.level_name} SCHOLARSHIP</div>
                <div className={styles.course_scholarship_name}>{course.scholarship_name}</div>
                <div className={styles.course_scholarship_promo}>{course.scholarship_promo}</div>
                <div className={styles.course_action}>
                    <Button type="primary" size={"lg"}>Secure Scholarship</Button>
                    <div className={styles.course_cta}>Secure your spot today and our experts will connect with you within <span className='text-blue font-bold'>48 hours</span></div>
                </div>
            </div>
        </div>
    );
}