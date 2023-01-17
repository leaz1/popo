import '../stylesheets/Write.scss';
import {SetStateAction, useEffect, useState} from "react";
import {Field, FieldArray, Form, Formik, FormikProps, useFormik} from "formik";
import {values} from "lodash";

export function WriteScreen() {

    // const workForm = useFormik({
    //     initialValues: {
    //         title: '',
    //         tags: '',
    //         introduction: '',
    //         chapters: [
    //             {
    //                 title: 'Sample chapter',
    //                 text: 'The quick brown fox jumps over the lazy dog',
    //             }
    //         ],
    //     },
    //     onSubmit: values => {
    //         console.log(workForm.values);
    //     }
    // });
    //
    // function handleEdit(event: any) {
    //     setTitle(event.target.value);
    // }

    const [hideCollapsibleMeta, setHideCollapsibleMeta] = useState(false);

    return (
        <div className="write-area">
            <Formik
                initialValues={{
                    title: '',
                    tags: '',
                    introduction: '',
                    text: '',
                    chapters: [
                        {
                            title: '',
                            text: '',
                        },
                    ]
                    // friends: ['jared', 'ian', 'brent']
                }}
                onSubmit={(values) => console.log(values)}
            >
                {({values}) => (
                    <Form className="write-form-area">
                            <div className="write-entry-area">
                                <div className="write-meta-area">
                                    <div className="write-title-area">
                                        <Field type="text" name="title"
                                               className="write-short-text write-title full-width"/>
                                        <button
                                            type="button"
                                            className="write-collapse-button"
                                            onClick={() => setHideCollapsibleMeta(!hideCollapsibleMeta)}
                                        >Fold
                                        </button>
                                    </div>
                                    <div className="write-collapsible-area" hidden={hideCollapsibleMeta}>
                                        <div className="write-tags">
                                            <Field type="text" name="tags" className="write-short-text full-width"/>
                                        </div>
                                        <div className="write-introduction">
                                            <Field type="text" name="introduction" className="write-short-text full-width"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="write-chapters-area">
                                    <FieldArray
                                        name="chapters"
                                        render={arrayHelpers => (
                                            values.chapters.map((chapter, index) => (
                                                <div key={index} className="write-chapter">
                                                    <Field type="text" name={`chapters[${index}].title`} className="write-short-text" hidden/>
                                                    <Field as="textarea" name={`chapters[${index}].text`} className="write-text"/>
                                                    <div className="write-chapter-widgets">
                                                        <button
                                                            type="button"
                                                            className="write-chapter-widget"
                                                            onClick={() => arrayHelpers.remove(index)}
                                                        >
                                                            -
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="write-chapter-widget"
                                                            onClick={() => arrayHelpers.insert(index + 1, {
                                                                title: '',
                                                                text: '',
                                                            })}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="write-action-area">
                                <div className="write-chapter-action-area">
                                    <FieldArray
                                        name="chapters"
                                        render={arrayHelpers => (
                                            values.chapters.map((chapter, index) => (
                                                <div className="write-chapter-action">
                                                    <div className="write-chapter-action-label">
                                                        Chapter {index}
                                                    </div>
                                                    <div className="write-chapter-action-set">
                                                        <button
                                                            type="button"
                                                            onClick={() => arrayHelpers.remove(index)}
                                                            className="write-chapter-action-option"
                                                        >
                                                            -
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => arrayHelpers.insert(index + 1, '')}
                                                            className="write-chapter-action-option"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    />
                                </div>
                                <div className="write-conclude-action-area">
                                    <div className="write-action">
                                        <button type="submit">Publish</button>
                                    </div>
                                    <div className="write-action">
                                        <button type="submit">Save</button>
                                    </div>
                                </div>

                            </div>
                    </Form>
                )}
            </Formik>
        </div>

    )
}
