package com.entity.view;

import com.entity.TiwenhuidaEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 提问回答
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2021-05-12 08:13:45
 */
@TableName("tiwenhuida")
public class TiwenhuidaView  extends TiwenhuidaEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public TiwenhuidaView(){
	}
 
 	public TiwenhuidaView(TiwenhuidaEntity tiwenhuidaEntity){
 	try {
			BeanUtils.copyProperties(this, tiwenhuidaEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
