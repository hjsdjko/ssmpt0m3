package com.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.utils.PageUtils;
import com.utils.Query;


import com.dao.TiwenhuidaDao;
import com.entity.TiwenhuidaEntity;
import com.service.TiwenhuidaService;
import com.entity.vo.TiwenhuidaVO;
import com.entity.view.TiwenhuidaView;

@Service("tiwenhuidaService")
public class TiwenhuidaServiceImpl extends ServiceImpl<TiwenhuidaDao, TiwenhuidaEntity> implements TiwenhuidaService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<TiwenhuidaEntity> page = this.selectPage(
                new Query<TiwenhuidaEntity>(params).getPage(),
                new EntityWrapper<TiwenhuidaEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<TiwenhuidaEntity> wrapper) {
		  Page<TiwenhuidaView> page =new Query<TiwenhuidaView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<TiwenhuidaVO> selectListVO(Wrapper<TiwenhuidaEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public TiwenhuidaVO selectVO(Wrapper<TiwenhuidaEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<TiwenhuidaView> selectListView(Wrapper<TiwenhuidaEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public TiwenhuidaView selectView(Wrapper<TiwenhuidaEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}

}
